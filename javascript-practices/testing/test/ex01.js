const assert = require("assert");
const { hello } = require("../ex01");

// Mocha
// testcase 의 callback은 람다는 안쓰는게 좋다. this가 문제가 될 수 있음.
describe("hello()", function () {
  it('"Hello World!" 문자열을 반환해야 함', function () {
    assert.strictEqual(hello(), "Hello World!"); // Mocha가 assertion을 제공하지 않지만, node 기본 내장 assert를 사용
  });
});
