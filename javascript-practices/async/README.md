## 비동기

설치

```bash
[..\async] $ npm init -y
[..\async] $ npm i -D mocha
[..\async] $ npx mocha --version
9.0.2
```

package.json

```json
"scripts": {
    "test": "npx mocha"
  },
```

실행

```bash
[..\async] $ npm test
```

[..test/ex02.js]

chai

```bash
[..\async] $ npm i -D chai
```

```javascript
const ex02 = require("../ex02");
// const assert = require("assert").strict;
const should = require("chai").should();

describe("ex02", function () {
  this.timeout(5000);

  it('should return "ok"', async function () {
    const res = await ex02("param-data");
    // assert.equal(res, "ok");
    res.should.equal("ok");
  });
});
```
