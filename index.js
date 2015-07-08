var pos = require('pos')
var spewer = require('spewer')

module.exports = function(text, lev){
  var level = lev !== undefined ? lev : 0.5
  var orig = text.split(" ")
  var words = new pos.Lexer().lex(text)
  var taggedWords = new pos.Tagger().tag(words)
  var tags = taggedWords.map(function(w){ return w[1] }).join(" ")
  var spewed = spewer.spew(tags)
  return spewed.split(" ").map(function(spew, i){
    return Math.random() < level ? spew : orig[i]
  }).join(" ")
}
