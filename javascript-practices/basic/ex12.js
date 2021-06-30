// Array 확장 : List 메서드 추가(prototype 확장)

Array.prototype.insert = function (index, value) {
  if (value instanceof Array) {
    /*
    for (var i = 0; i < value.length; i++) {
      this.splice(index, 0, value[i]);
      index++;
    }
    */
    var _this = this;
    value.forEach(function (e) {
      _this.splice(index++, 0, e); // this가 element가 아니여서 error >> _this
    });
  } else {
    this.splice(index, 0, value);
  }
};

// 리스트로 사용하기
var a = [1, 2, 4];
console.log(a); // [ 1, 2, 4 ]
a.insert(2, 3);
console.log(a); // [ 1, 2, 3, 4 ]
a.insert(2, ["a", "b", "c"]); // 배열로 들어가버림, 그렇게 안하려면 함수 수정
console.log(a); // [ 1, 2, [ 'a', 'b', 'c' ], 3, 4 ] > // [ 1,  2, 'a', 'b', 'c', 3, 4 ]

Array.prototype.remove = function (index) {
  this.splice(index, 1);
};

a.remove(3);
console.log(a); // [ 1, 2, [ 'a', 'b', 'c' ], 4 ] >> [ 1, 2, 'a', 'c', 3, 4 ]

var f = function (param) {
  console.log(this + " : " + param); // Object [global] : 전역 객체
};
o = { name: "me" };
f.call(o, "sewon@gmail.com"); //this가 o가 됨 {} sewon@gmail.com
f.apply(o); //{} undefined
