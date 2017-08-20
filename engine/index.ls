require! <[os fs fs-extra path bluebird crypto LiveScript chokidar moment]>
require! <[express body-parser express-session connect-multiparty]>
require! <[passport passport-local passport-facebook passport-google-oauth2]>
require! <[nodemailer nodemailer-smtp-transport csurf]>
require! <[./aux ./watch]>
require! 'uglify-js': uglify-js, LiveScript: lsc
colors = require \colors/safe

content-security-policy = []

get-ip = (default-ifname = "en0") ->
  ret = []
  ifaces = os.networkInterfaces!
  Object.keys ifaces .forEach (ifname) ->
    if default-ifname and ifname != default-ifname => return
    ifaces[ifname].forEach (iface) ->
      if \IPv4 == iface.family and iface.internal == false => ret.push iface.address
  ret

backend = do
  update-user: (req) -> req.logIn req.user, ->
  #session-store: (backend) -> @ <<< backend.dd.session-store!
  init: (config, authio, extapi) -> new bluebird (res, rej) ~>
    @config = config
    if @config.debug => # for weinre debug
      ip = get-ip!0 or "127.0.0.1"
      (list) <- content-security-policy.map
      if <[connect-src script-src]>.indexOf(list.0) < 0 => return
      list.push "http://#ip:8080"
      list.push "#{config.urlschema}#{config.domain}"
    content-security-policy := content-security-policy.map(-> it.join(" ")).join("; ")
    session-store = -> @ <<< authio.session
    session-store.prototype = express-session.Store.prototype
    app = express!
    app.disable \x-powered-by
    app.set 'trust proxy', '127.0.0.1'
    app.use (req, res, next) ->
      res.header "Access-Control-Allow-Origin", "#{config.urlschema}#{config.domainIO}"
      res.header "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
      res.header "Access-Control-Allow-Methods", "PUT"
      next!


    app.use (req, res, next) ->
      console.log "[#{req.method}] #{req.url}".green
      res.setHeader \Content-Security-Policy, content-security-policy
      res.setHeader \X-Content-Security-Policy, content-security-policy
      next!
    app.use body-parser.json limit: config.limit
    app.use body-parser.urlencoded extended: true, limit: config.limit

    app.set 'view engine', 'jade'
    app.engine \ls, (path, options, callback) ->
      opt = {} <<< options
      delete opt.settings
      delete opt.basedir
      try
        source = fs.read-file-sync path .toString!
        result = LiveScript.compile source
        [err,ret] = [null, "(function(){var req = #{JSON.stringify(opt)};#result;}).call(this);"]
      catch e
        [err,ret] = [e,""]
      callback err, ret
    app.set 'views', path.join(__dirname, '../src/jade/')
    app.locals.basedir = app.get \views

    get-user = (u, p, usep, detail, doCreate = false, done) ->
      authio.user.get u, p, usep, detail, doCreate
        .then ->
          done null, it
          return null
        .catch ->
          msg = if usep => "incorrect email or password" else "did you login with social account?"
          done null, false, {message: msg}
          return null


    passport.use new passport-local.Strategy {
      usernameField: \email
      passwordField: \passwd
    },(u,p,done) ~>
      get-user u, p, true, null, false, done


    passport.use new passport-google-oauth2.Strategy(
      do
        clientID: config.google.clientID
        clientSecret: config.google.clientSecret
        callbackURL: "/u/auth/google/callback"
        passReqToCallback: true
        profileFields: ['id', 'displayName', 'link', 'emails']
      , (request, access-token, refresh-token, profile, done) ~>
        if !profile.emails =>
          done null, false, do
            message: "We can't get email address from your Google account. Please try signing up with email."
          return null
        get-user profile.emails.0.value, null, false, profile, true, done
    )

    passport.use new passport-facebook.Strategy(
      do
        clientID: config.facebook.clientID
        clientSecret: config.facebook.clientSecret
        callbackURL: "/u/auth/facebook/callback"
        profileFields: ['id', 'displayName', 'link', 'emails']
      , (access-token, refresh-token, profile, done) ~>
        if !profile.emails =>
          done null, false, do
            message: "We can't get email address from your Facebook account. Please try signing up with email."
          return null
        get-user profile.emails.0.value, null, false, profile, true, done
    )

    app.use express-session do
      secret: config.session.secret
      resave: true
      saveUninitialized: true
      store: new session-store!
      proxy: true
      cookie: do
        path: \/
        httpOnly: true
        maxAge: 86400000 * 30 * 12 #  1 year
        domain: \localhost
    app.use passport.initialize!
    app.use passport.session!

    passport.serializeUser (u,done) ->
      authio.user.serialize u .then (v) ->
        done null, v
        return null
      return null
    passport.deserializeUser (v,done) ->
      authio.user.deserialize v .then (u) ->
        done null, u or {}
        return null
      return null

    router = do
      user: express.Router!
      api: express.Router!

    #backend.csrfProtection = csurf!
    #app.use backend.csrfProtection
    app.use "/e", extapi!

    app.get \/js/global.js, /*backend.csrfProtection,*/ (req, res) ->
      res.setHeader \content-type, \application/javascript
      payload = JSON.stringify({
        user: req.user, global: true, /*csrfToken: req.csrfToken!,*/ production: config.is-production
      })
      if req.user => delete req.user.{}payment.strip
      res.send """(function() { var req = #payload;
      if(window._backend_) { angular.module("backend").factory("global",["context",function(context){
        var own={}.hasOwnProperty,key;
        for (key in req) if (own.call(req, key)) context[key] = req[key];
        return req;
      }]); }else{
        angular.module("backend",[]).factory("global",[function(){return req;}]);
      }})()"""

    # this goes after global.js so the static global.js will never be served.
    app.use \/, express.static(path.join(__dirname, '../static'))

    app
      ..use "/d", router.api
      ..use "/u", router.user
      ..get "/d/health", (req, res) -> res.json {}

    router.user
      ..get \/null, (req, res) -> res.json {}
      ..get \/me, (req,res) ->
        info = if req.user => req.user{email} else {}
        res.set("Content-Type", "text/javascript").send(
          "angular.module('main').factory('user',function() { return "+JSON.stringify(info)+" });"
        )
      ..get \/200, (req,res) -> res.json(req.user)
      ..get \/403, (req,res) -> res.status(403)send!
      ..get \/login, (req, res) -> res.render \auth/index.jade
      ..post \/signup, (req, res) ->
        {email,displayname, passwd, config} = req.body{email,displayname, passwd, config}
        if !email or !displayname or passwd.length < 4 => return aux.r400 res
        authio.user.create email, passwd, true, {displayname}, (config or {})
          .then (user)->
            req.logIn user, -> res.redirect \/u/200; return null
            return null
          .catch -> res.redirect \/u/403; return null
      ..post \/login, passport.authenticate \local, do
        successRedirect: \/u/200
        failureRedirect: \/u/403
      ..get \/logout, (req, res) ->
        req.logout!
        res.redirect \/
      ..get \/auth/google, passport.authenticate \google, {scope: ['email']}
      ..get \/auth/google/callback, passport.authenticate \google, do
        successRedirect: \/
        failureRedirect: \/auth/failed/
      ..get \/auth/facebook, passport.authenticate \facebook, {scope: ['email']}
      ..get \/auth/facebook/callback, passport.authenticate \facebook, do
        successRedirect: \/
        failureRedirect: \/auth/failed/

    postman = nodemailer.createTransport nodemailer-smtp-transport config.mail

    multi = do
      parser: connect-multiparty limit: config.limit
      clean: (req, res, next) ->
        for k,v of req.files => if fs.exists-sync v.path => fs.unlink v.path
      cleaner: (cb) -> (req, res, next) ~>
        if cb => cb req, res, next
        @clean req, res, next

    @ <<< {config, app, express, router, postman, multi}
    res!
  watch: ->
    build = ~>
      console.log "[BUILD] Config 'engine/config/#{@config.config}.ls -> 'static/js/share/config.js'"
      ret = lsc.compile(
        fs.read-file-sync("engine/config/#{@config.config}.ls").toString!,
        {bare: true}
      )
      if !@config.debug => ret = uglify-js.minify(ret,{fromString:true}).code
      fs-extra.mkdirs 'static/js/share'
      fs.write-file-sync 'static/js/share/config.js', ret
    chokidar.watch "engine/config/#{@config.config}.ls", ignored: (~>), persistent: true
      .on \add, ~> build!
      .on \change, ~> build!

  start: (cb) ->
    @watch!
    # Try to handle this:
    # [17/05/08 01:54:30] FacebookTokenError: This authorization code has been used.  /  undefined
    if !@config.debug =>
      (err, req, res, next) <- @app.use
      if !err => return next!
      if err.code == \EBADCSRFTOKEN =>
        aux.r403 res, "be hold!", false
      else
        console.error(
          colors.red.underline("[#{moment!format 'YY/MM/DD HH:mm:ss'}]"),
          colors.yellow(err.toString!)
          " / "
          colors.yellow(err.path)
        )
        console.error colors.grey(err.stack)
        res.status 500 .render '500'
    if @config.watch => watch.start @config
    server = @app.listen @config.port, -> console.log "listening on port #{server.address!port}"

module.exports = backend
