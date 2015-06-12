var pos = require('pos')
var spewer = require('spewer')

module.exports = function(text){
  var words = new pos.Lexer().lex(text)
  var taggedWords = new pos.Tagger().tag(words)
  var tags = taggedWords.map(function(w){ return w[1] }).join(" ")
  return spewer.spew(tags)
}
