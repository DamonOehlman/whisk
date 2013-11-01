var pluck = require('../pluck');
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