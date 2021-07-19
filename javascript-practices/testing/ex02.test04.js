const assert = require("assert").strict;
const { X } = require("./ex02");

try {
  const a = new X();
  const b = new X();
  const c = a;

  assert.equal(a, c, "fail: a === c" /**실패 시 message */); // OK
  // assert.equal(a, b, "fail: a === b" /**실패 시 message */); // fail: a === b
  assert.deepEqual(a, c, "fail: deepEqual"); // OK
  assert.deepEqual(a, b, "fail: deepEqual"); // OK

  b.bar = "foo";
  assert.deepEqual(a, b, "fail: notDeepEqual"); // fail: notDeepEqual

  console.log("OK");
} catch (err) {
  console.error(err.message);
}
