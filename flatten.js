/**
  ## flatten

  Flatten an array using `[].reduce`

  <<< examples/flatten.js

**/

module.exports = function(a, b) {
  // if a is not already an array, make it one
  a = Array.isArray(a) ? a : [a];

  // concat b with a
  return a.concat(b);
};