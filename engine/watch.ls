require! <[fs fs-extra path chokidar child_process jade stylus js-yaml]>
require! <[colors require-reload markdown jsdom bluebird node-minify]>
require! 'uglify-js': uglify-js, LiveScript: lsc, 'uglifycss': uglify-css
require! <[../config/scriptpack]>
reload = require-reload require

markdown = markdown.markdown

RegExp.escape = -> it.replace /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"

cwd = path.resolve process.cwd!
cwd-re = new RegExp RegExp.escape "#cwd#{if cwd[* - 1]=='/' => "" else \/}"
log = (error, stdout, stderr) -> if "#{stdout}\n#{stderr}".trim! => console.log that

newer = (f1, f2) ->
  if !fs.exists-sync(f1) => return false
  if !fs.exists-sync(f2) => return true
  (fs.stat-sync(f1).mtime - fs.stat-sync(f2).mtime) > 0

mkdir-recurse = ->
  if !fs.exists-sync(it) =>
    mkdir-recurse path.dirname it
    fs.mkdir-sync it

src-tree = (matcher, morpher) ->
  ret = {} <<< do
    down-hash: {}
    up-hash: {}
    matcher: -> false
    morpher: -> it
    parse: (filename) ->
      dir = path.dirname(filename)
      ret = fs.read-file-sync filename .toString!split \\n .map @matcher .filter(->it)
      if @morpher => ret = ret.map ~> path.join(dir, @morpher(it, dir))
      else ret = ret.map -> path.join(dir, it)
      @down-hash[filename] = ret
      for it in ret => if not (filename in @up-hash.[][it]) => @up-hash.[][it].push filename
    find-root: (filename) ->
      work = [filename]
      ret = []
      hash = {}
      while work.length > 0
        f = work.pop!
        if f and !hash[f] and (!@up-hash[f] or @up-hash[f].length == 0) =>
          hash[f] = 1
          ret.push f
        else if @up-hash[f] => work ++= @up-hash[f]
      ret
  ret <<< {matcher, morpher}

jade-tree = src-tree(
  (-> if /^ *include (.+)| *extends (.+)/.exec(it) => (that.1 or that.2) else null),
  ((it, dir) ->
    if /^\//.exec it =>
      rpath = dir.split(/src\/jade\/?/)[* - 1]
      if rpath => it = path.join(("../" * rpath.split(\/).length), it)
      it
    it
  )
)

styl-tree = src-tree(
  (-> if /^ *@import ('?)(.+)\1/.exec(it) => that.2 else null ),
  (-> it.replace(/(.styl)?$/, ".styl"))
)

ftype = ->
  switch
  | /\.yaml$/.exec it => "yaml"
  | /\.ls$/.exec it => "ls"
  | /\.styl/.exec it => "styl"
  | /\.jade$/.exec it => "jade"
  | /\.md/.exec it => "md"
  | otherwise => "other"

filecache = {}
base = do
  ignore-list: [/^(.+\/)*?\.[^/]+$/]
  ignore-func: (f) -> @ignore-list.filter(-> it.exec f.replace(cwd-re, "")replace(/^\.\/+/, ""))length
  start: (config) ->
    @config = config or {config: \default}
    <[src src/ls src/styl static static/css static/js static/js/pack/ static/css/pack/]>.map ->
      if !fs.exists-sync it => fs.mkdir-sync it
    chokidar.watch 'static/css', ignored: (~> @ignore-func it), persistent: true
      .on \add, ~> @packer.watcher it
      .on \change, ~> @packer.watcher it
    chokidar.watch 'static/js', ignored: (~> @ignore-func it), persistent: true
      .on \add, ~> @packer.watcher it
      .on \change, ~> @packer.watcher it
    chokidar.watch 'static/assets', ignored: (~> @ignore-func it), persistent: true
      .on \add, ~> @packer.watcher it
      .on \change, ~> @packer.watcher it
    watcher = chokidar.watch 'src', ignored: (~> @ignore-func it), persistent: true
      .on \add, ~> @watch-handler it
      .on \change, ~> @watch-handler it
    console.log "[Watcher] monitoring source files...".cyan

  packer: do
    handle: null
    queue: {}
    handler: ->
      @handle = null

      for k,v of @queue.{}js =>
        des = "static/js/pack/#k.js"
        des-min = "static/js/pack/#k.min.js"
        ret = [fs.read-file-sync(file).toString! for file in v.1].join("")
        #ret = uglify-js.minify(ret,{fromString:true}).code
        #if !base.config.debug => ret = uglify-js.minify(ret,{fromString:true}).code
        fs.write-file-sync des, ret

        if k == \view =>
          node-minify.minify({
            compressor: 'uglifyjs'
            input: des
            output: des-min
          })

        console.log "[BUILD] Pack '#k' -> #des by #{v.0}"

      for k,v of @queue.{}css =>
        des = "static/css/pack/#k.css"
        des-min = "static/css/pack/#k.min.css"
        ret = [fs.read-file-sync(file).toString! for file in v.1].join("")
        fs.write-file-sync des, ret

        node-minify.minify({
          compressor: 'csso'
          input: des
          output: des-min
        })

        console.log "[BUILD] Pack '#k' -> #des by #{v.0}"

      @queue = {}

    watcher: (d) ->
      packers = reload "../config/scriptpack.ls"
      pack = [[\js, k,v] for k,v of packers.js] ++ [[\css, k,v] for k,v of packers.css]
      for [type,k,v] in pack =>
        if @queue{}[type][k] => continue
        files = v.map(->path.join(\static, it))
        if (d in files) => @queue{}[type][k] = [d, files]
      if [k for k of @queue.{}css].length or [k for k of @queue.{}js].length =>
        if @handle => clearTimeout(@handle)
        @handle = setTimeout((~> @handler!), 500)
  watch-handler: (d, trigger-only = false) ->
    if /^src\/jade\/static/.exec(d) => trigger-only = true
    setTimeout (~> @_watch-handler d, trigger-only), 500
  _watch-handler: (it, trigger-only = false) ->
    if !it or /node_modules|\.swp$/.exec(it)=> return
    src = if it.0 != \/ => path.join(cwd,it) else it
    src = src.replace path.join(cwd,\/), ""
    [type,cmd,des] = [ftype(src), "",""]
    if trigger-only => type = \other

    if type == \yaml and src == "src/jade/yaml/question.yaml" =>
      type = \jade
      src = "src/jade/data/index.jade"

    # other - for triggering jade rebuilding
    if type == \jade or type == \other =>
      if /^src\/jade\/view\//.exec(src) => return
      data = reload "../config/site/#{@config.config}.ls"
      try
        if type == \jade => jade-tree.parse src
        srcs = jade-tree.find-root src
      catch
        console.log "[BUILD] #src failed: "
        console.log e.message
      _src = src
      if srcs.indexOf(_src) < 0 and type == \jade => srcs ++= _src
      if type == \other => srcs = srcs.filter(->it != _src)
      logs = []
      if srcs => for src in srcs
        if !/src\/jade/.exec(src) => continue
        try
          code = fs.read-file-sync src .toString!
          if /^\/\/- ?(module|view) ?/.exec(code) => continue
          des = src.replace(/src\/jade/, "static").replace(/\.jade/, ".html")
          if newer(des, _src) => continue
          desdir = path.dirname(des)
          if !fs.exists-sync(desdir) or !fs.stat-sync(desdir).is-directory! => mkdir-recurse desdir
          if /data\/index.jade/.exec(src) =>
            try
              cfg = js-yaml.safe-load fs.read-file-sync "src/jade/yaml/question.yaml", \utf8
            catch e
              console.log "[ERROR] Question Yaml parse failed."
              cfg = {}
          try
            fs.write-file-sync(des, jade.render(
              code,
              {filename: src, basedir: path.join(cwd,\src/jade/)} <<< {config: data} <<< {data: cfg or {}}
            ))
            logs.push "[BUILD]   #src --> #des"
          catch
            logs.push "[BUILD]   #src failed: "
            logs.push e.message
      if logs.length =>
        logs = ["[BUILD] recursive from #_src:"] ++ logs
        console.log logs.join(\\n)

    if type == \ls =>
      if !/src\/ls/.exec(src) => return
      des = src.replace(\src/ls, \static/js).replace /\.ls$/, ".js"
      if newer(des, src) => return
      try
        mkdir-recurse path.dirname(des)
        fs.write-file-sync(
          des,
          (
            if @config.debug =>
              lsc.compile(fs.read-file-sync(src)toString!,{bare:true})
            else =>
              uglify-js.minify(lsc.compile(fs.read-file-sync(src)toString!,{bare:true}),{fromString:true}).code
          )
        )
        console.log "[BUILD] #src --> #des"
      catch
        console.log "[BUILD] #src failed: "
        console.log e.message
      return

    if type == \styl =>
      try
        styl-tree.parse src
        srcs = styl-tree.find-root src
      catch
        console.log "[BUILD] #src failed: "
        console.log e.message
      logs = []
      _src = src
      if srcs => for src in srcs
        if !/src\/styl/.exec(src) => continue
        try
          des = src.replace(/src\/styl/, "static/css").replace(/\.styl$/, ".css")
          if newer(des, _src) => continue
          code = fs.read-file-sync(src)toString!
          if /^\/\/- ?(module) ?/.exec(code) => continue
          stylus code
            .set \filename, src
            .define 'index', (a, b) ->
              a = (a.string or a.val).split(' ')
              return new stylus.nodes.Unit(a.indexOf b.val)
            .render (e, css) ~>
              if e =>
                logs ++= [
                  "[BUILD]   #src failed: "
                  "  >>> #{e.name}"
                  "  >>> #{e.message}"
                ]
              else =>
                mkdir-recurse path.dirname(des)
                if !@config.debug => css = uglify-css.processString css, uglyComments: true
                fs.write-file-sync des, css
                logs.push "[BUILD]   #src --> #des"
        catch
          logs.push "[BUILD]   #src failed: "
          logs.push e.message
        if logs.length =>
          logs = ["[BUILD] recursive from #src:"] ++ logs
          console.log logs.join(\\n)

  build: (cmd, des, dess) ->
    filecache[des] = null
    if dess.length => for dir in dess.map(->path.dirname it) =>
      if !fs.exists-sync dir => mkdir-recurse dir
    console.log "[BUILD] #cmd"
    child_process.exec cmd, log

module.exports = base

if require.main == module => base.start!
