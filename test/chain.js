var test = require('tape');
var chain = require('../chain');

function add1(value) {
  return value + 1;
}

function add5(value) {
  return value + 5;
}

function noop() {
}

function nullify() {
  return null;
}

test('can create a chained function', function(t) {
  t.plan(1);
  t.equal(typeof chain(add1, add5), 'function');
});

test('can run a chained function and get a result', function(t) {
  t.plan(1);
  t.equal(chain(add1, add5)(0), 6);
});

test('a function that does not return a result will not destroy the value', function(t) {
  t.plan(1);
  t.equal(chain(add1, add5, noop)(0), 6);
});

test('a function that nullifies the result will override previous values', function(t) {
  t.plan(1);
  t.equal(chain(add1, add5, nullify)(0), null);
});
