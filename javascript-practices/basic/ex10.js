/** 배열(Array) */

// 1. 생성자 함수
console.log("[생성자 함수]===========================================");
var a1 = new Array();
console.log(typeof a1, a1 instanceof Array); // object true

// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어 난다.
var a2 = new Array(10);
a2[0] = 0;
a2[10] = 0; // size 가 자동 증가됨 error X
console.log(a2.length); // 10 > 11

// 초기값을 지정할 수 있다.
var a3 = new Array(0, 1, 2, 3, 4);
// 배열 요소에 값을 지정하지 않으면 undefined
console.log(a3[6], a3.length); // undefined 5

// Array vs Object
console.log("[Array vs Object]===========================================");
a4 = [];
a4[0] = 0;
a4["1"] = 1;
a4["name"] = "둘리";
a4["5"] = 5;
// 0,1,2,3,.... 길이가 변동 되지만, name같은 친구들은 길이 안바뀜
console.log(a4["0"], a4[1], a4.length, a4["name"]); // 0 1 6 둘리
for (property in a4) {
  console.log("prop: " + property + " : " + typeof property);
  // prop: 0 : string
  // prop: 1 : string
  // prop: 5 : string
  // prop: name : string
}

o4 = {};
o4["0"] = 0;
o4["1"] = 1;
o4["name"] = "마이콜";
console.log(o4["0"], o4[1], o4["name"], o4.length); // 0 1 마이콜 undefined
for (property in o4) {
  console.log("prop: " + property + " : " + o4[property]);
  //   prop: 0 : 0
  //   prop: 1 : 1
  //   prop: name : 마이콜
}

// 리터럴
console.log("[리터럴]===========================================");
var a5 = [
  function () {
    console.log("hello");
  }, //function
  20, //number
  "javascript", //string
  true, //boolean
  { email: "sewon@gmail.com", name: "jangsewon" }, // json
  null,
  undefined,
];
console.log(a5.length); // 7

for (var i = 0; i < a5.length; i++) {
  console.log(a5[i]);
  // [Function (anonymous)]
  // 20
  // javascript
  // true
  // { email: 'sewon@gmail.com', name: 'jangsewon' }
  // null
  // undefined
}

a5[0](); // hello
