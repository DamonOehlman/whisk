var within = require('../within');
var isKnownFruit = within(['apple', 'orange', 'banana']);

console.log(isKnownFruit('apple'));
// --> true

console.log(isKnownFruit('grape'));
// --> false

console.log(['apple', 'grape', 'banana'].filter(isKnownFruit));
// --> [ 'apple', 'banana' ]