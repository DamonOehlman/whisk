# whisk

Whisk is a collection of the functional operation helpers (underscore-like)
for working with map, filter, reduce, etc.


[![NPM](https://nodei.co/npm/whisk.png)](https://nodei.co/npm/whisk/)

[![Build Status](https://travis-ci.org/DamonOehlman/whisk.png?branch=master)](https://travis-ci.org/DamonOehlman/whisk)

## pluck

A very simple single field property extractor.

```js
var pluck = require('whisk/pluck');
var people = [
  { name: 'Bob', age: 35 },
  { name: 'Thelma', age: 32 },
  { name: 'Roger', age: 50 }
];

console.log(people.map(pluck('name')));
// --> [ 'Bob', 'Thelma', 'Roger' ]
```

### pluck todo

- Permit the extraction of multiple properties (should probably be a
  separate function?)

- Ability to pluck nested properties (e.g. `address.street`)

## License(s)

### MIT

Copyright (c) 2013 Damon Oehlman <damon.oehlman@gmail.com>

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
