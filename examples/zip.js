var zip = require('../zip');

console.log([1, 2, 3].map(zip(['a', 'b', 'c'])));
// --> [ [1, 'a'], [2, 'b'], [3, 'c'] ]

console.log([1, 2, 3].map(zip(['a', 'b', 'c'], ['x', 'y', 'z'])));
// --> [ [1, 'a', 'x'], [2, 'b', 'y'], [3, 'c', 'z'] ]