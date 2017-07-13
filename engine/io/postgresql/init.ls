require! <[../../../secret ../postgresql pg bluebird]>

queries = []

queries.push init-sessions-table = """create table if not exists sessions (
  key text not null unique primary key,
  detail jsonb
)"""

queries.push init-score-table = """create table if not exists score (
  key serial primary key,
  session text not null unique,
  data jsonb,
  updatedtime timestamp
)"""

client = new pg.Client secret.io-pg.uri
(e) <- client.connect
if e => return console.log e
console.log "connected"

query = (q) -> new bluebird (res, rej) ->
  (e,r) <- client.query q, _
  if e => rej e
  res r

consume = ->
  if queries.length =>
    task = queries.splice(0, 1).0
    query task
      .then -> consume!
      .catch -> [console.log(it), client.end!]
  else
    console.log "done."
    client.end!

consume!
