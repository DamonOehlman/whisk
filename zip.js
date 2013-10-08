/**
  ## zip

  zip one array with other arrays

  <<< examples/zip.js

  ### zip todo

  - tests

**/
module.exports = function() {
  var targets = [].slice.call(arguments);

  return function(item, index) {
    return [item].concat(targets.map(function(val) {
      return val[index];
    }));
  };
};