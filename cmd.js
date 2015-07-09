#!/usr/bin/env node

var wordVomit = require('./')
var fs = require('fs')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('replace words in a text with words of the same part of speech')
  .example('wordVomit where is my cupcake')
  .example('wordVomit -l 0.1 oh yeah, just a touch of that')
  .example('wordVomit -l 1 -f poetry_homework.txt')
  .example('rake db:migrate | wordVomit')
  .alias('l', 'level')
  .alias('f', 'file')
  .describe('l', 'floating point frequency at which to do replacement. higher value => more words get replaced. defaults to 0.5')
  .describe('f', 'path to file containing text to wordVomit all over')
  .argv

if(process.stdin.isTTY) {

  var text = argv.f ? fs.readFileSync(argv.f).toString() : argv._.join(" ")

  process.stdout.write(wordVomit(text, argv.l))
  process.stdout.write("\n")
} else {

  var data = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function(chunk) {
    data += chunk
  })

  process.stdin.on('end', function() {
    process.stdout.write(wordVomit(data, argv.l))
    process.stdout.write("\n")
  })
}