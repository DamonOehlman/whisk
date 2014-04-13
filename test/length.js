var test = require('tape');
var length = require('../length');

test('length of array', function(t) {
  t.plan(1);
  t.equal(length([1, 2, 3]), 3, 'ok');
});

test('length of a string', function(t) {
  t.plan(1);
  t.equal(length('Hello'), 5, 'ok');
});

test('map string lengths', function(t) {
  t.plan(1);
  t.deepEqual(
    ['Hi', 'there'].map(length),
    [2, 5],
    'ok'
  );
});