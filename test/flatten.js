var test = require('tape');
var flatten = require('../flatten');

test('single level array preserved', function(t) {
  t.plan(1);
  t.deepEqual(
    [1, 2, 3, 4, 5].reduce(flatten),
    [1, 2, 3, 4, 5],
    'ok'
  );
});

test('null elements preserved', function(t) {
  t.plan(1);
  t.deepEqual(
    [1, 2, null, 4].reduce(flatten),
    [1, 2, null, 4],
    'ok'
  );
});

test('null elements (first element) preserved', function(t) {
  t.plan(1);
  t.deepEqual(
    [null, 2, 3, 4].reduce(flatten),
    [null, 2, 3, 4],
    'ok'
  );
});

test('undefined elements preserved', function(t) {
  t.plan(1);
  t.deepEqual(
    [1, 2, undefined, 4].reduce(flatten),
    [1, 2, undefined, 4],
    'ok'
  );
});

test('flatten array of arrays', function(t) {
  t.plan(1);
  t.deepEqual(
    [[1, 2], [3, 4], [5]].reduce(flatten),
    [1, 2, 3, 4, 5],
    'ok'
  );
});

test('flatten mixed array', function(t) {
  t.plan(1);
  t.deepEqual(
    [1, [2, 3], [4], 5].reduce(flatten),
    [1, 2, 3, 4, 5],
    'ok'
  );
});