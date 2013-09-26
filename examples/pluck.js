var pluck = require('../pluck');
var people = [
  { name: 'Bob', age: 35 },
  { name: 'Thelma', age: 32 },
  { name: 'Roger', age: 50 }
];

console.log(people.map(pluck('name')));
// --> [ 'Bob', 'Thelma', 'Roger' ]