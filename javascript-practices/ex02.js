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
 * 1. new 생성자함수() 사용해서 생성,
 *      Function()->function type 객체가 생성
 * 2. function(){} (함수 리터럴)
 *
 */

/*
    자바 스크립트의 객체를 구분하는 또 다른 방법
    1. 내장(Built-In, Native) 객체
        자바 스크립트 엔진 안에 미리 내장되어 있는 객체
        Number, Boolean, Date, RegExp .. 생성자 함수 객체
        perseInt, setTimeout, setInterval .. 일반 함수 객체
        window 객체 (브라우저에서만 ... 전역 객체)
    2. 호스트 객체
        자바스크립트 엔진이 임베디드된 호스트의 객체(자바스크립트 접근 가능)
        브라우저만 해당(document, location, XmlHttpRequest, ...)
    3. 사용자 객체
        자바스크립트 코드가 엔진에서 실행되면서 생성되는 객체들 
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
console.log("o2: " + typeof o2); // o2 object
console.log("a2: " + typeof a2); // a2 object

console.log("[객체 2]===================================");

var f = new Function("a", "b", "return a + b;");
var f2 = function (a, b) {
  return a + b;
};

console.log("f: " + typeof f); // f function
console.log("f: " + typeof f2); // f2 function

console.log(
  "원시타입과 원시타입을 Wrapper한 객체는 구분없이 사용가능하다.==================================="
);

console.log(i + i2); // 20
console.log(s + s2); // Hello worldHello world

// 원시 타입에 메서드가 호출될 때,
// 임시 Wrapper 객체가 만들어 져서 메서드 호출이 일어난 뒤 사라진다.

console.log(
  "원시타입도 메서드 호출이 가능하다.==================================="
);

console.log(b.valueOf()); // true
console.log(b2.valueOf()); // true
