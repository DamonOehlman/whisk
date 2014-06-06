/**
  ## sum

  Sum an input array of values

  <<< examples/sum.js

**/
module.exports = function(a, b) {
  function sum(memo, item) {
    return (memo || 0) + item;
  }

  return Array.isArray(a) ? a.reduce(sum) : sum(a, b);
};
