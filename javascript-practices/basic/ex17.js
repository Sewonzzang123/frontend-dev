// function 객체 메서드 call

var email = "dooly@gmail.com";
global.name = "둘리"; //var name = "둘리";
console.log(name, global.name); // 둘리 둘리
console.log(email, global.email); // dooly@gmail.com undefined

console.log("======function 객체 메서드 call======");

var f1 = function () {
  console.log(this);
};

f1(); // caller: global >> global

// this 바꾸기
var o = {
  name: "마이콜",
};

f1.apply(o); // caller:o >> {name:"마이콜"}

console.log("======function 객체 메서드 call======");

var f2 = function (s) {
  console.log(s + " " + this.name);
};

f2.call(o, "hi"); // hi 마이콜

// 1. apply, call : 호출과 동시에 this를 바인딩
// 2. 비동기 callback 함수 에서의 this binding ?

// ex) setTimeout
