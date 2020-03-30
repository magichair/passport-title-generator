#!/usr/bin/env node

var data = require('./data.json');
var passportTitleGenerator = require('./passport-title-generator');

var items = parseInt(process.argv[2], 10) || 1;

with(Math) {
  passportTitleGenerator.seed(floor(random() * data.adjs.length * data.nouns.length));

  for (var i = 0; i < items; i++) {
    console.log(passportTitleGenerator.next().join(' '));
  }
}
