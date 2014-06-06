var sum = require('../sum');
var range = require('../range');

console.log(sum([1, 2]));
// --> 3

console.log(sum(range(1, 10)));
// --> 55

console.log([1, 2].reduce(sum));
// --> 3

console.log(range(1, 10).reduce(sum));
// --> 55
