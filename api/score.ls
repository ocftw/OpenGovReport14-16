require! <[fs fs-extra bluebird crypto read-chunk sharp js-yaml]>
require! <[../engine/aux ../src/ls/config/errcode]>
(engine,io) <- (->module.exports = it)  _

api = engine.router.api
app = engine.app

questions = js-yaml.safe-load fs.read-file-sync "src/jade/yaml/question.yaml", \utf8
qids = questions.map -> it.id

api.post \/score/, (req, res) ->
  payload = req.body.payload or {}
  data = {}
  for id in qids => data[id] = (if isNaN(+payload[id]) => 0 else +payload[id]) or 0 
  session = req.sessionID
  io.query(
  "insert into score (session, data, updatedtime) values ($1, $2, $3)",
  [session, data, new Date!])
    .then (r={})-> 
      io.query "select data from score where session = '0' for update"
    .then (r={}) ->
      sum = (if !r.rows or !r.rows.length or !r.rows.0 => {} else r.rows.0).data or {}
      for k,v of data => sum[k] = (sum[k] or 0) + v
      sum.total = (sum.total or 0) + 1
      io.query([
        "insert into score (session, data, updatedtime) values ($1, $2, $3)"
        "on conflict (session) do update set (session, data, updatedtime) = ($1, $2, $3)"
      ].join(" "), ['0', sum, new Date!])
    .then (r={}) -> io.query "commit;"
    .then -> res.send!
    .catch -> return aux.r403 res

api.get \/score/, (req, res) ->
  io.query "select data from score where session = $1", [req.sessionID]
    .then (r={}) -> res.send (if r.rows and r.rows.length and r.rows.0 => r.rows.0.data else {}) or {}
    .catch aux.error-handler res

api.get \/score/mean, (req, res) ->
  io.query "select data from score where session = '0'"
    .then (r={}) ->
      ret = (if r.rows and r.rows.0 => r.rows.0 else null) or {}
      res.send ret.data or {}
    .catch aux.error-handler res

