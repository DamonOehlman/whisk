var test = require('tape');
var pluck = require('../pluck');
var people = [
  { name: 'Bob', age: 35 },
  { name: 'Thelma', age: 32 },
  { name: 'Roger', age: 50 }
];

test('extract single property', function(t) {
  t.plan(1);
  t.deepEqual(
    people.map(pluck('name')),
    ['Bob', 'Thelma', 'Roger'],
    'extracted names'
  );
});

test('extract missing property results in undefined result', function(t) {
  t.plan(1);
  t.deepEqual(
    people.map(pluck('foobar')),
    [undefined, undefined, undefined],
    'request for missing property returned undefined'
  );
});