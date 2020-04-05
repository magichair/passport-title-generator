var assert = require('assert')
var passportTitleGenerator = require('./passport-title-generator');

assert(passportTitleGenerator.seed(123));

assert(passportTitleGenerator.adjPrime(3));
assert(passportTitleGenerator.nounPrime(7));

assert.deepEqual(passportTitleGenerator(), [ 'Untossable', 'Talent' ]);

assert(passportTitleGenerator.seed(456) === false);
