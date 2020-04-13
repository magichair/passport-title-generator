var assert = require('assert')
var passportTitleGenerator = require('./passport-title-generator');

assert(passportTitleGenerator.seed(123));

assert(passportTitleGenerator.adjPrime(3));
assert(passportTitleGenerator.nounPrime(7));

assert.deepEqual(passportTitleGenerator(), [ 'Spirited', 'Savant' ]);

assert(passportTitleGenerator.seed(456) === false);

originalData = passportTitleGenerator.originalData;

passportTitleGenerator.newData(
{
    adjs: ["testy"],
    nouns: ["tester"]
});
assert.deepEqual(passportTitleGenerator(), ['testy', 'tester'])
