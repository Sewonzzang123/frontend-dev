const assert = require("assert").strict;
const { na } = require("./ex02");

try {
  assert.deepEqual(na(), [2, 4, 6], "fail: deepEqual" /**실패 시 message */);
  assert.equal(na(), [2, 4, 6], "fail: equal" /**실패 시 message */); //fail: equal
  console.log("OK");
} catch (err) {
  console.error(err.message);
}
