/* null vs undefined */
// undefined : 기본타입(원시타입) 없는거
// null : 객체 없는거

// var myVar1 = undefined; //명시적으로 undefined 대입
var myVar1; //암시적으로 undefined 대입
var myVar2 = null;

console.log(myVar1 + " : " + myVar2); //undefined : null
console.log(typeof myVar1 + " : " + typeof myVar2); //undefined : object

console.log(myVar1 == myVar2); //true (값 비교)
console.log(myVar1 === myVar2); //false (타입 비교)

console.log("[== equality]==================================");

// == : equality, 값의 등치성, 형변환 O
console.log(4 == "4"); // true
console.log(true == 1); // true
console.log("abc" == new String("abc")); // true

console.log(true + 10); // 11
console.log("abc" + new String("abc")); // abcabc
console.log(1 + "1"); // 11
console.log("1" + 1); // 11

console.log("[=== identity]==================================");
// === : identity , 형변환 X
// 1. 타입의 동일성
// 2. 값의 동일성 또는 객체의 동일성
console.log("2" === 2); // false
console.log(true === 1); // false
console.log(2 === 4); // false
console.log(new Number(4) === new Number(4)); // false

console.log("[형변환]==================================");
// 추천
// 엄격하게 형변환을 해서 두 피연산자의 타입을 맞춰준다.
var str = "5";
console.log(parseInt(str) == 5); //true
