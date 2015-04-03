/**
  ## match

  Given a set of properties (A), test whether another object (B) has properties
  that match the values specified in A.  Additional properties in B are not
  accounted for when determining the match.

  <<< examples/match.js

**/
module.exports = function(props) {
  var keys = Object.keys(props);
  
  return function(target) {
    return target && keys.reduce(function(memo, key) {
      return memo && target[key] === props[key];
    }, true);
  };
};