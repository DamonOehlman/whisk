var flatten = require('../flatten');

console.log([1, [2, 3], 4, [5]].reduce(flatten));
// --> [ 1, 2, 3, 4, 5 ]