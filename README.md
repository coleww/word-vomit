word-vomit
----------------

Takes an input string, finds the part of speech of each word with [pos](https://www.npmjs.com/package/pos), and uses [spewer](https://www.npmjs.com/package/spewer) to replace it with a random word of the same part of speech. This mostly produces utter nonsense.

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
