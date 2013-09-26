var test = require('tape');
var pluck = require('../pluck');
var people = [
  { name: 'Bob', age: 35, address: { country: 'Australia' } },
  { name: 'Thelma', age: 32, address: { country: 'New Zealand' } },
  { name: 'Roger', age: 50, address: { country: 'Fiji' } }
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

test('extract nested property', function(t) {
  t.plan(1);
  t.deepEqual(
    people.map(pluck('address.country')),
    ['Australia', 'New Zealand', 'Fiji'],
    'extracted address country'
  );
});

test('extract missing nested property yields undefined', function(t) {
  t.plan(1);
  t.deepEqual(
    people.map(pluck('address.postcode')),
    [undefined, undefined, undefined],
    'undefined results received as expected'
  );
});