const ex01 = require("../ex01");

describe("ex01", function () {
  it("should run without error", function (done) {
    ex01("param-error", done);
  });
});

/*
  npm test
    ex01
    ✔ should run without error (1501ms)


  1 passing (2s)
 */
