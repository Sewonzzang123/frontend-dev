/**
 * 변수와 데이터 타입
 *
 * [기본 타입 (primitive type), 유사객체]
 * 1. number
 * 2. boolean
 * 3. string
 * 4. undefined
 *
 * [객체1]- Object type
 * 1. new 생성자함수()를 사용해서 생성
 *   Number()
 *   Boolean()
 *   String()
 *   Object()
 * 2. null
 * 3. [](배열 리터럴)
 * 4. {}(객체 리터럴(json))
 *
 * [객체2]- function type
 * function
 *
 */

console.log("[원시 타입]===================================");

var u = undefined; // var u; 와 동일, 선언과 정의의 구분이 없다.
var i = 10;
var b = true;
var s = "hello world";

console.log("u: " + typeof u); // u undefined
console.log("i: " + typeof i); // i number
console.log("b: " + typeof b); // b boolean
console.log("s: " + typeof s); // s string

console.log("[객체 1]===================================");

var i2 = new Number(10);
var b2 = new Boolean(true);
var s2 = new String("Hello world");
var o = new Object(true);
var a = new Array();
var n = null;
var a2 = [];
var o2 = {};

console.log("i2: " + typeof i2); // i2: object
console.log("b2: " + typeof b2); // b2: object
console.log("s2: " + typeof s2); // s2: object
console.log("o: " + typeof o); // o object
console.log("a: " + typeof a); // a object
console.log("n: " + typeof n); // n object
console.log("o2: " + typeof o2); // o object
console.log("a2: " + typeof a2); // a object

console.log("[객체 2]===================================");

var f = function (a, b) {
  return a + b;
};

console.log("f: " + typeof f); // f function
