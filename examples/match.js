var match = require('../match');

// create a function that find level 1 headings in a markdown AST
// see: marked-ast package
var isH1 = match({ type: 'heading', level: 1 });

console.log(isH1({ type: 'code' }));
// --> false

console.log(isH1({ type: 'heading', level: 2 }));
// --> false

console.log(isH1({ type: 'heading', level: 1 }));
// --> true

console.log(isH1({ type: 'heading', level: 1, color: 'red' }));
// true