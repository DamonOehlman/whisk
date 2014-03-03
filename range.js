/**
  ## range

  Create an array of elements from x -> y (inclusive)

  <<< examples/range.js

**/
module.exports = function(start) {
  // default the start to 0
  start = start || 0;

  function rangeTo(end) {
    var x = start;
    var items = [];
    var counter = 0;

    while (x <= end) {
      items[counter++] = x++;
    }

    return items;
  }

  return arguments[1] !== undefined ? rangeTo(arguments[1]) : rangeTo;
};