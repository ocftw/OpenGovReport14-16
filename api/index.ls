require! <[fs path]>
require! <[./sample ./user ./score]>
module.exports = (engine, io) ->
  user engine, io
  sample engine, io
  score engine, io
