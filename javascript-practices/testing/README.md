# 테스트

## 자바스크립트 단위 테스트 도구]

1. 자바스크립트 단위 테스트 도구는 20여가지가 넘게 있다.
2. JAVA : JUNIT == JavaScript : JSUnit ( 개발 중지 상태 )
3. JSUnit 프로젝트 ---> Jasmine (2010년 ~ 현재, 자체 assertion을 가지고 있다. BDD 기반의 개발 표준 테스팅)
4. DOM 직접 조작 애플리케이션 ( jQuery 기반 ) -> QUnit (세팅하기 쉽고 간편하게 테스트, Promise 기반 비동기 테스트 )
5. Node 기반 백엔드 애플리케이션 테스트 -> Mocha ( Promise 기반 비동기 테스트, 자체 Assertion 이 없다. 대신 외부 Assertion 라이브러리를 다양하게 지원한다. (chai, should.js, expect.js) )
6. Jasmine, Qunit, Mocha, Jest(React 개발 테스트 도구)

## Mocha

- Promise 기반 비동기 테스트
- 자체 Assertion 이 없다
- 대신, Node 코어 모듈 중에 assert 모듈 뿐만 아니라
  다양한 외부 Assertion 라이브러리를 지원한다. (chai, should.js)
- 유연하고 확장성이 좋다.

설치

```bash
[..\testing] $ npm init -y
[..\testing] $ npm i -D mocha
[..\testing] $ npx mocha --version
9.0.2
```

## Mocha 테스트 케이스 모듈(.js, .esm, ..) 작성

[..\testing\ex01.js]

```javascript
exports.hello = () => "Hello World!";
```

[..\testing\test\ex01.js] $

```javascript
const assert = require("assert");
const { hello } = require("../ex01");

describe("hello()", function () {
  it('"Hello World!" 문자열을 반환해야 함', function () {
    assert.strictEqual(hello(), "Hello World!");
  });
});
```

테스트 수행 1 (개별적)

```bash
[..\testing] $ npx mocha test/ex01

  hello()
    ✔ "Hello World!" 문자열을 반환해야 함


  1 passing (6ms)
```

테스트 수행 2 (일관적 (밑에 디렉토리까지 전부 테스트))

```bash
[..\testing] $ npx mocha
```

테스트 수행 3 (npm scripts stage)

1. package.json 에 scripts stage를 추가

```json
"scripts": {
    "test" : "npx mocha"
}
```

2. 테스트 수행

```bash
[..\testing] $ npm test
```

## Assertion 기초

[..\testing\ex02.js]

```javascript
exports.add = (a, b) => a + b;
exports.na = () => [2, 4, 6];
exports.X = function () {};
```

[..\testing\ex02.test01.js]

```javascript
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
```

Strict Mode(===, !===, 객체인 경우 동일성) 로 assertion을 하여야 한다.

1. equal(deprecteds) -> strictEqual
2. notEqual(deprecteds) -> strictNotEqual
3. deepEqual(deprecteds) -> strictDeepEqual
4. notDeepEqual(deprecteds) -> notStrictDeepEqual
