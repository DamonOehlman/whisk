var test = require('tape');
var nub = require('../nub');

test('numeric uniques', function(t) {
  t.plan(1);
  t.deepEqual(
    nub([1, 2, 6, 5, 2, 2, 1 ]),
    [ 1, 2, 6, 5 ],
    'ok'
  );
});