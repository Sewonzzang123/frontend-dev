/**
 * 변수와 데이터 타입
 *
 * [기본 타입 (primitive type), 유사객체]
 * 1. number
 * 2. boolean
 * 3. string
 * 4. undefined
 *
 * [객체]
 * Number()
 * Boolean()
 * String()

 *
 */
var u; // var u = undefined; 와 동일 자바 스크립트는 선언과 정의의 구분이 없다.
var i = 10;
var b = true;
var s = "hello world";

console.log("u: " + typeof u); // u undefined
console.log("i: " + typeof i); // i number
console.log("b: " + typeof b); // b boolean
console.log("s: " + typeof s); // s string

console.log(s.toLocaleUpperCase()); // 잠깐 new String(s).to...로 실행됨
