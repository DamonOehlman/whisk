/**
  ## pluck

  A very simple single field property extractor.

  <<< examples/pluck.js

  ### pluck todo

  - Permit the extraction of multiple properties (should probably be a
    separate function?)

  - Ability to pluck nested properties (e.g. `address.street`)

**/
module.exports = function(path) {
  return function(item) {
    return item && item[path];
  };
};