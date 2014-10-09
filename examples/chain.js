var chain = require('../chain');

function add1(value) {
  return value + 1;
}

function add5(value) {
  return value + 5;
}

console.log(chain(add1, add5)(0));
// --> 6
