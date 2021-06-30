// 1. let : block scope의 변수 정의

// let의 함수 범위
try {
  if (true) {
    var i = 10;
    let j = 20;
  }
  console.log(i, j); // error
} catch (e) {
  console.log("error:" + e);
}

// var의 함수 범위
try {
  var f = function () {
    var m = 20;
  };

  f();
  console.log(m);
} catch (e) {
  console.log("error:" + e);
}
