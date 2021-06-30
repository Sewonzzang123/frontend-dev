// 2. const : block scope의 상수 정의

// 1. block scope 확인
try {
  if (true) {
    const NUM = 10;
  }
  console.log(NUM);
} catch (e) {
  console.log("error: " + e); // error: ReferenceError: NUM is not defined
}

// 2. error: 대입(Assignment) 에러
try {
  const NUM = 10;
  NUM = 20;
} catch (e) {
  console.log("error: " + e); // error: TypeError: Assignment to constant variable.
}
