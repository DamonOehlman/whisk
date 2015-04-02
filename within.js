/**
  ## within

  Check whether a value is within a specified array of values:

  <<< examples/within.js

**/
module.exports = function(list) {
  
  if (! Array.isArray(list)) {
    return function() {
      return false;
    }
  }
  
  return function(val) {
    return list.indexOf(val) >= 0;
  };
};