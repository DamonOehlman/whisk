var test = require('tape');
var range = require('../range');

test('can generate a range of numbers from 0 --> 3', function(t) {
  t.plan(1);
  t.deepEqual(range(0, 3), [0, 1, 2, 3], 'ok');
});

test('can defer execution of a range function', function(t) {
  var rangeFromZero;

  t.plan(2);
  t.equal(typeof (rangeFromZero = range(0)), 'function', 'defered');
  t.deepEqual(rangeFromZero(3), [0, 1, 2, 3], 'ok');
});

test('start value will default to 0 if not supplied when defered', function(t) {
  var rangeFromZero;

  t.plan(2);
  t.equal(typeof (rangeFromZero = range()), 'function', 'defered');
  t.deepEqual(rangeFromZero(3), [0, 1, 2, 3], 'ok');
});

test('can generate a range of numbers from 2 --> 8', function(t) {
  t.plan(1);
  t.deepEqual(range(2, 8), [2, 3, 4, 5, 6, 7, 8], 'ok');
});