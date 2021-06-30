/*
    자바스크립트 객체 2 - function 타입(함수)
    
*/

// 일반함수 (실행코드블록이 있는 함수, 관례대로 소문자로 시작)
var myFunction = function () {
  console.log("일반 함수");
};

// 생성자 함수 (관례대로 대문자로 시작)
var MyObject = function (name, age) {
  this.name = name;
  this.age = age;
};

var obj1 = new MyObject("둘리", 10);
var obj2 = new MyObject("마이콜", 30);
console.log(obj1); // MyObject { name: '둘리', age: 10 }
console.log(obj2); // MyObject { name: '마이콜', age: 30 }
