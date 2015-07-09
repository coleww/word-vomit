word-vomit
----------------

[![NPM](https://nodei.co/npm/word-vomit.png)](https://nodei.co/npm/word-vomit/)

Takes an input string, finds the part of speech of each word with [pos](https://www.npmjs.com/package/pos), and uses [spewer](https://www.npmjs.com/package/spewer) to replace it with a random word of the same part of speech. This mostly produces utter nonsense.

[demo](http://coleww.github.io/word-vomit)

### INSTALL

`npm install word-vomit`

### USE

```
    var vomit = require('word-vomit')
    console.log(vomit("The quick brown fox jumps over the lazy dog"))
    => the unmindful primitive monohull scalpels only nary olden exorcism
    console.log(vomit("The quick brown fox jumps over the lazy dog")) // AGAIN!
    => any folklike peculiar monsieur diets wth many shapeless stratum
    console.log(vomit("The quick brown fox jumps over the lazy dog")) // ANOTHER!
    => each impulse forgone oyster lineages toward thees nature spot
```

### API

`wordVomit(text, level=0.5)`
- text: string to transform
- level: 0-1 floating point frequency at which to do the transformation. 1 = always, 0 = never.

### CLI

`npm install word-vomit -g`

```
replace words in a text with words of the same part of speech

Options:
  -l, --level  floating point frequency at which to do replacement. higher value
               => more words get replaced. defaults to 0.5
  -f, --file   path to file containing text to wordVomit all over
  -h, --help   Show help                                               [boolean]

Examples:
  wordVomit where is my cupcake
  wordVomit -l 0.1 oh yeah, just a touch
  of that
  wordVomit -l 1 -f poetry_homework.txt
  rake db:migrate | wordVomit
```
