var test = require('tape');
var not = require('../not');

test('single item removed', function(t) {
  t.plan(1);
  t.deepEqual(
    ['a', 'b', 'c', 'd', 'e'].filter(not('a')),
    ['b', 'c', 'd', 'e'],
    'ok'
  );
});

test('array passed to not means none of the items will be included', function(t) {
  t.plan(1);
  t.deepEqual(
    ['a', 'b', 'c', 'd', 'e'].filter(not(['a', 'b'])),
    ['c', 'd', 'e'],
    'ok'
  );
});

test('not called with varargs behaves the same as a single target array', function(t) {
  t.plan(1);
  t.deepEqual(
    ['a', 'b', 'c', 'd', 'e'].filter(not('a', 'b')),
    ['c', 'd', 'e'],
    'ok'
  );
});