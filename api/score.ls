require! <[fs fs-extra bluebird crypto read-chunk sharp]>
require! <[../engine/aux ../src/ls/config/errcode]>
(engine,io) <- (->module.exports = it)  _

api = engine.router.api
app = engine.app

api.post \/score/, (req, res) ->
  json = req.body.payload or {}
  session = req.sessionID
  io.query "select data from score where session = $1", [session]
    .then (r={}) ->
      if r.rows and r.rows.length => return aux.reject 403, "you have submitted before"
      io.query "insert into score (session, data, updatedtime) values ($1, $2, $3)", [session, data, new Date!]
    .then (r={})-> 
      io.query "select data from score where session = '0' for update"
    .then (r={}) ->
      sum = if !r.rows and !r.rows.length => {} else r.rows.0
      for k,v of json => sum[k] = (sum[k] or 0) + v
      sum.total = (sum.total or 0) + 1
      io.query([
        "insert into score (session, data, updatedtime) values ($1, $2, $3)"
        "on conflict (session) do update set (session, data, updatedtime) = ($1, $2, $3)"
      ].join(" "), ['0', sum, new Date!])
    .then (r={}) -> io.query "commit;"
    .then -> res.send!
    .catch aux.error-handler res
api.get \/score/mean, (req, res) ->
  io.query "select data from score where session = '0'"
    .then (r={}) ->
      ret = (if r.rows => r.rows.0 else null) or {}
      res.send (ret or {})
    .catch aux.error-handler res

