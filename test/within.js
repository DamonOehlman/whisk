var test = require('tape');
var within = require('../within');
var isKnownFruit;

test('create partial given an array', function(t) {
  t.plan(1);
  isKnownFruit = within(['apple', 'orange', 'banana']);
  t.ok(typeof isKnownFruit == 'function', 'created function');
});

test('an item that exists within the set passes', function(t) {
  t.plan(1);
  t.ok(isKnownFruit('apple'));
});

test('an item that _does not_ exist within the set passes', function(t) {
  t.plan(1);
  t.notOk(isKnownFruit('grape'));
});

test('can use filter to get the intersection of two sets', function(t) {
  t.plan(1);
  t.deepEqual(['apple', 'grape', 'banana'].filter(isKnownFruit), ['apple', 'banana']);
});

test('a partial function that is created on something other than array always returns false', function(t) {
  t.plan(1);
  t.notOk(within({ foo: 'bar' })('foo'));
});