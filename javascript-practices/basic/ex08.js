/*
    자바스크립트 객체 3
*/

var o = {
  name: "둘리",
  age: 10,
  isFemale: false,
};

var f = function () {
  console.log("hello world");
};
f(); // hello world

console.log(o); // { name: '둘리', age: 10, isFemale: false }

console.log("[객체의 확장]===============================");
o.another = {
  name: "마이콜",
  age: 30,
  isFemale: false,
};

f.another = {
  name: "마이콜",
  age: 30,
  isFemale: false,
  info: function () {
    console.log(this.name + " : " + this.age);
  },
};

console.log(f); // [Function: f] { another: { name: '마이콜', age: 30, isFemale: false } }
f.another.info(); // 마이콜 : 30
console.log(o);
/*
{
  name: '둘리',
  age: 10,
  isFemale: false,
  another: { name: '마이콜', age: 30, isFemale: false }
}
*/

console.log("[기본 타입은 확장X]===============================");

var i1 = 10;
var i2 = new Number(i1);

i2.another = {};
console.log(i2); // [Number: 10] { another: {} }

i1.another = {};
console.log(i1.another); // undefined
