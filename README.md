# whisk

Whisk is a collection of the functional operation helpers (underscore-like)
for working with map, filter, reduce, etc.


[![NPM](https://nodei.co/npm/whisk.png)](https://nodei.co/npm/whisk/)

[![Build Status](https://img.shields.io/travis/DamonOehlman/whisk.svg?branch=master)](https://travis-ci.org/DamonOehlman/whisk) [![bitHound Score](https://www.bithound.io/github/DamonOehlman/whisk/badges/score.svg)](https://www.bithound.io/github/DamonOehlman/whisk) 

## chain

Create a function that will create the combined result of calling all
the provided functions in the provided order.

```js
var chain = require('whisk/chain');

function add1(value) {
  return value + 1;
}

function add5(value) {
  return value + 5;
}

console.log(chain(add1, add5)(0));
// --> 6

```

## flatten

Flatten an array using `[].reduce`

```js
var flatten = require('whisk/flatten');

console.log([1, [2, 3], 4, [5]].reduce(flatten));
// --> [ 1, 2, 3, 4, 5 ]
```

## length

Get the length of the target.

```js
var length = require('whisk/length');

console.log(length([1, 2, 3]));
// --> 3

console.log(length('Hello'));
// --> 5

console.log(['Hi', 'there'].map(length));
// --> [ 2, 5 ]
```

## match

Given a set of properties (A), test whether another object (B) has properties
that match the values specified in A.  Additional properties in B are not
accounted for when determining the match.

```js
var match = require('whisk/match');

// create a function that find level 1 headings in a markdown AST
// see: marked-ast package
var isH1 = match({ type: 'heading', level: 1 });

console.log(isH1({ type: 'code' }));
// --> false

console.log(isH1({ type: 'heading', level: 2 }));
// --> false

console.log(isH1({ type: 'heading', level: 1 }));
// --> true

console.log(isH1({ type: 'heading', level: 1, color: 'red' }));
// true
```

## not

Designed to be used in combination with an `[].filter` the `not` function
can be used to exlude items from an array.

```js
var not = require('whisk/not');
var items = ['a', 'b', 'c', 'd', 'e'];

console.log(items.filter(not('a')));
// --> [ 'b', 'c', 'd', 'e' ]

console.log(items.filter(not(['a', 'b'])));
// --> [ 'c', 'd', 'e' ]

console.log(items.filter(not('a', 'b')));
// --> [ 'c', 'd', 'e' ]
```

## nub

Return only the unique elements of the list.

```js
var nub = require('whisk/nub');

console.log(nub([ 1, 2, 3, 2, 3, 4 ]));
// --> [ 1, 2, 3, 4 ]

console.log(nub([ 'red', 'blue', 'red' ]));
// --> [ 'red', 'blue' ]

console.log(nub([ 4, 6, 6, 8, 3, 4, 1 ]));
// --> [ 4, 6, 8, 3, 1 ]
```

## pluck

Extract targeted properties from a source object. When a single property
value is requested, then just that value is returned.

In the case where multiple properties are requested (in a varargs calling
style) a new object will be created with the requested properties copied
across.

__NOTE:__ In the second form extraction of nested properties is
not supported.

```js
var pluck = require('whisk/pluck');
var people = [
  { name: 'Bob', age: 35, address: { country: 'Australia' } },
  { name: 'Thelma', age: 32, address: { country: 'New Zealand' } },
  { name: 'Roger', age: 50, address: { country: 'Fiji' } }
];

console.log(people.map(pluck('name')));
// --> [ 'Bob', 'Thelma', 'Roger' ]

console.log(people.map(pluck('address.country')));
// --> [ 'Australia', 'New Zealand', 'Fiji' ]

console.log(people.map(pluck('name', 'age')));
// --> [ { name: 'Bob', age: 35 }, { name: 'Thelma', age: 32 }, { name: 'Roger', age: 50 } ]
```

## range

Create an array of elements from x -> y (inclusive)

```js
var pluck = require('whisk/range');

console.log(range(0, 3));
// --> [ 0, 1, 2, 3 ]
```

## sum

Sum an input array of values

```js
var sum = require('whisk/sum');
var range = require('whisk/range');

console.log(sum([1, 2]));
// --> 3

console.log(sum(range(1, 10)));
// --> 55

console.log([1, 2].reduce(sum));
// --> 3

console.log(range(1, 10).reduce(sum));
// --> 55

```

## times

Create an element of arrays that can be iterated over n times:

```js
var times = require('whisk/times');

times(3).forEach(function() {
  console.log('hello world');
});

// --> hello world
// --> hello world
// --> hello world

```

## within

Check whether a value is within a specified array of values:

```js
var within = require('whisk/within');
var isKnownFruit = within(['apple', 'orange', 'banana']);

console.log(isKnownFruit('apple'));
// --> true

console.log(isKnownFruit('grape'));
// --> false

console.log(['apple', 'grape', 'banana'].filter(isKnownFruit));
// --> [ 'apple', 'banana' ]
```

## zip

zip one array with other arrays

```js
var zip = require('whisk/zip');

console.log([1, 2, 3].map(zip(['a', 'b', 'c'])));
// --> [ [1, 'a'], [2, 'b'], [3, 'c'] ]

console.log([1, 2, 3].map(zip(['a', 'b', 'c'], ['x', 'y', 'z'])));
// --> [ [1, 'a', 'x'], [2, 'b', 'y'], [3, 'c', 'z'] ]
```

### zip todo

- tests

## License(s)

### MIT

Copyright (c) 2015 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
