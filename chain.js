/**
  ## chain

  Create a function that will create the combined result of calling all
  the provided functions in the provided order.

  <<< examples/chain.js

**/
module.exports = function(fns) {
  fns = [].concat(fns || []).concat([].slice.call(arguments, 1));

  return function(value) {
    return fns.reduce(function(memo, fn) {
      var result = fn(memo);

      return result !== undefined ? result : memo;
    }, value || 0);
  }
};
