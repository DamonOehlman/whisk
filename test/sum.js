var test = require('tape');
var sum = require('../sum');
var range = require('../range');

test('can sum an array of integers', function(t) {
  t.plan(1);
  t.equal(sum([1, 2]), 3);
});

test('can sum a range', function(t) {
  t.plan(1);
  t.equal(sum(range(1, 10)), 55);
});

test('can sum in a reduce function', function(t) {
  t.plan(1);
  t.equal([1, 2].reduce(sum), 3);
});

test('can sum in a reduce function (using a generated range)', function(t) {
  t.plan(1);
  t.equal(range(1, 10).reduce(sum), 55);
});
