var not = require('../not');
var items = ['a', 'b', 'c', 'd', 'e'];

console.log(items.filter(not('a')));
// --> [ 'b', 'c', 'd', 'e' ]

console.log(items.filter(not(['a', 'b'])));
// --> [ 'c', 'd', 'e' ]

console.log(items.filter(not('a', 'b')));
// --> [ 'c', 'd', 'e' ]