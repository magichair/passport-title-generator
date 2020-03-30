# passport-title-generator [![Build Status](https://travis-ci.org/magichair/passport-title-generator.svg?branch=master)](https://travis-ci.org/magichair/passport-title-generator)

Gives you a random title to use in Animal Crossing: New Horizons

## Install

```shell
$ npm install passport-title-generator
```

## Use

```javascript
var passportTitleGenerator = require('passport-title-generator');

// seed it so your pairs are different than someone else using this lib
passportTitleGenerator.seed(123);
// -> true

// optionally you can provide primes to adjust how words are chosen:
passportTitleGenerator.adjPrime(3);
passportTitleGenerator.nounPrime(7);

for (var i = 0; i < 10; i++) {
  // generate and log pairs
  console.log(passportTitleGenerator());
}
// console.logs ->
// Mistakenly Caught Decorating Fiend
// Plucky Caretaker
// Small-Fry Younger Brother
// Untossable Sort
// Casual Resident
// Festive Person
// Messy Ms. Popular
// Plaza Lad
// Single-Occupant Ground Traveler
// Unpearable Fish

// after you start generating pairs, you cannot change the seed or primes
// otherwise you might end up with non-unique pairs
passportTitleGenerator.seed(456);
// -> false
```

## CLI

Install it globally:

```shell
$ npm install -g
```

Then you can:

```shell
$ passport-title-generator
royal-haircut
```

You can also specify the number of unique names to generate:

```shell
$ passport-title-generator 5
unlined octet
luckier gospel
wordy shading
slothful groomsmen
devotional newsletter
```

It randomly seeds between runs with `Math.random()`.


## Word list

Manual input - will update as I unlock more. Feel free to offer a PR for other titles I may have missed (or typos).

## See Also
* [cat-names](https://github.com/sindresorhus/cat-names)
* [dog-names](https://github.com/sindresorhus/dog-names)
* [dragon-names](https://github.com/kraihn/dragon-names)

## License
MIT
