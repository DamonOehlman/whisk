/**
  ## length

  Get the length of the target.

  <<< examples/length.js
**/
module.exports = function(target) {
  if (target && typeof target.length == 'number') {
    return target.length;
  }

  throw new Error('Cannot get length from ' + target);
};