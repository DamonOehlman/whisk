var length = require('../length');

console.log(length([1, 2, 3]));
// --> 3

console.log(length('Hello'));
// --> 5

console.log(['Hi', 'there'].map(length));
// --> [ 2, 5 ]