/**
  ## pluck

  A very simple single field property extractor.

  <<< examples/pluck.js

**/
module.exports = function(path) {
  var parts = (path || '').split('.');
  var maxIdx = parts.length - 1;

  return function(item) {
    var partIdx = 0;
    var val = item;

    do {
      val = val && val[parts[partIdx++]];
    } while (val && partIdx <= maxIdx);

    return val;
  };
};