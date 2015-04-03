var test = require('tape');
var match = require('../match');
var isH1;

test('create partial', function(t) {
  t.plan(1);
  isH1 = match({ type: 'heading', level: 1 });
  t.ok(typeof isH1 == 'function', 'created function');
});

test('nothing matching fails', function(t) {
  t.plan(1);
  t.notOk(isH1({ type: 'code' }));
});

test('partial match fails', function(t) {
  t.plan(1);
  t.notOk(isH1({ type: 'heading', level: 2 }));
});

test('exact match passes', function(t) {
  t.plan(1);
  t.ok(isH1({ type: 'heading', level: 1 }));
});

test('additional properties do not affect match', function(t) {
  t.plan(1);
  t.ok(isH1({ type: 'heading', level: 1, color: 'red' }));
});

test('testing a non-object fails', function(t) {
  t.plan(2);
  t.notOk(isH1('hello'));
  t.notOk(isH1(true));
});