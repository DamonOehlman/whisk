var nub = require('../nub');

console.log(nub([ 1, 2, 3, 2, 3, 4 ]));
// --> [ 1, 2, 3, 4 ]

console.log(nub([ 'red', 'blue', 'red' ]));
// --> [ 'red', 'blue' ]

console.log(nub([ 4, 6, 6, 8, 3, 4, 1 ]));
// --> [ 4, 6, 8, 3, 1 ]