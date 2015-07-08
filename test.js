var tap = require('tape')
var vomit = require('./')

tap.test('accepts level param', function(t){
  t.equal(vomit('whatever ok cool now', 0), 'whatever ok cool now')
  t.notEqual(vomit('whatever ok cool now', 1), 'whatever ok cool now')
  t.end()
})

tap.test('deals with, whatever, idk.', function(t){
  t.ok(vomit('!((*(*!#*&)%)!)!#%)13095810351035'))
  t.end()
})