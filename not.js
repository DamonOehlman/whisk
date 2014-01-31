/**
  ## not

  Designed to be used in combination with an `[].filter` the `not` function
  can be used to exlude items from an array.

  <<< examples/not.js

**/
module.exports = function(target) {
  // convert varargs into an array target
  if (arguments.length > 1) {
    target = [].slice.call(arguments, 0);
  }

  // if the target is an array, then the comparison function checks
  // whether the current item is a member of the target array
  if (Array.isArray(target)) {
    return function(item) {
      return target.indexOf(item) < 0;
    };
  }

  // simple comparison function (strict inequality)
  return function(item) {
    return item !== target;
  };
};