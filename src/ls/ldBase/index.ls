angular.module \ldBase, <[]>
  ..service 'fileTool', <[$rootScope]> ++ ($rootScope) -> @ <<< do
    smil-to-gif: (svg, root, dur, frame = 30, gif = null, progress = ->) ->
      new Promise (res, rej) ->
        svg.pauseAnimations!
        if !gif => gif := new GIF do
          workers: 1, quality: 10,
          width: 200, height: 200,
          transparent: 0xffffff
        gif.on \finished, (blob) ~>
          svg.unpauseAnimations!
          progress 100
          res blob
        _capture = (count) ~>
          if count >= frame => return gif.render!
          svg.setCurrentTime(dur * count / frame)
          progress 100 * count / frame
          domtoimage.toPng( root, { filter: (-> it.tagName != \animate), bgcolor: 'rgba(255,255,255,0)' })
            .then (dataUrl) ~>
              img = new Image!
              img.onload = ->
                gif.addFrame(img, {delay: Math.round(dur * 1000/frame)})
                _capture count + 1
              img.src = dataUrl
            .catch (e) -> console.log "error: ", e
        _capture 0

    datauri-to-arraybuffer: (data) ->
      splitted = data.split \,
      byte-string = atob(splitted.1)
      mime-string = splitted.0.split(\:).1.split(\;).0
      ab = new ArrayBuffer(byte-string.length)
      ia = new Uint8Array(ab)
      for i from 0 til byte-string.length => ia[i] = byte-string.charCodeAt i
      return ab

    dom-to-arraybuffer: (dom, width, height) ->
      if !domtoimage? => return Promise.reject new Error("dom-to-image not installed, which is required")
      domtoimage.toPng(dom).then (datauri) ~> @imgurl-to-arraybuffer datauri, width, height

    # optional width and height force a sized image with content centered.
    imgurl-to-arraybuffer: (url, width, height) -> new Promise (res, rej) ->
      img = new Image!
      img.onload = ->
        w = if width? => width else img.width
        h = if height? => height else img.height
        canvas = document.createElement("canvas")
        canvas.width = w
        canvas.height = h
        ctx = canvas.getContext \2d
        ctx.fillStyle = \#ffffff
        ctx.fillRect 0, 0, w, h
        ctx.drawImage(
          img,
          0, 0, img.width, img.height,
          (w - img.width)/2,
          (h - img.height)/2,
          img.width, img.height
        )
        canvas.toBlob (blob) ~>
          fr = new FileReader!
          fr.onload = -> res @result
          fr.readAsArrayBuffer blob
      img.src = url

  ..service 'eventBus', <[$rootScope]> ++ ($rootScope) ->
    ret = @ <<< do
      queues: {}
      handlers: {}
      process: (name=null) ->
        if !name => list = [[k,v] for k,v of @queues]
        else list = [[name, @queues[][name]]]
        ([k,v]) <~ list.map
        if !v or !v.length => return
        for func in (@handlers[k] or []) => for payload in v => func.apply null, [payload.0] ++ payload.1
        @queues[][name].splice 0, @queues[][name].length
      listen: (name, cb) ->
        @handlers[][name].push cb
        @process name
      fire: (name, payload, ...params) ->
        @queues[][name].push [payload, params]
        @process name

  ..service 'ldNotify', <[$rootScope $timeout]> ++ ($rootScope, $timeout) -> @ <<< do
    queue: []
    send: (type, message) -> 
      @queue.push node = {type, message}
      $timeout (~> @queue.splice @queue.indexOf(node), 1), 5000
    danger: (message) -> @send \danger, message
    warning: (message) -> @send \warning, message
    info: (message) -> @send \info, message
    success: (message) -> @send \success, message
  ..service 'ldBase', <[$rootScope $timeout ldNotify]> ++ ($rootScope, $timeout, ldNotify) ->
    @ <<< do
      scrollto: (sel = null,delay=0) ->
        <- setTimeout _, delay
        top = if sel => ( $(sel).offset!top - 60 ) else 0
        $(document.body).animate {scrollTop: top}, '500', 'swing', ->
        $("html").animate {scrollTop: top}, '500', 'swing', ->
      track: (cat, act, label, value) -> if ga? => ga \send, \event, cat, act, label, value
      notifications: ldNotify.queye
