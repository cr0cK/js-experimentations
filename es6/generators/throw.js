var assert = require('assert');

var sentinel = new Error('foo');

function* demo() {
  try {
    yield 10;
  } catch (ex) {
    assert(ex === sentinel);
  }
}

var d = demo();
d.next();
// => {value: 10, done: false}
d.throw(sentinel);
