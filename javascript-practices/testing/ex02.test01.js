const assert = require("assert");
const { add } = require("./ex02");

try {
  assert.equal(add(10, 20), 30); // ==
  assert.strictEqual(add(10, 20), "30"); // === error
  assert.equal(add(10, 20), 20); // error OK가 출력되지 않음
  console.log("OK");
} catch (err) {
  console.error("fail : ", err.message);
}
