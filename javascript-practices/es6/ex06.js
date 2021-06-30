// 6. Destructuring(구조 분해)

// ex1 - basic
let firstName;
let lastName;
const user = {
  firstName: "둘",
  lastName: "리",
  email: "dooly@gmail.com",
};

({ firstName, lastName } = user);
console.log(firstName, lastName);

// ex2 - Default
const goods = {
  name: "tv",
  price: 10000,
  stockCount: 30,
};

let { name, price, stockCount = 0, soldCount = 0 } = goods;
console.log(name, price, stockCount, soldCount); // tv 10000 30 0

// ex3 - Different Variable Names
// 구조 분해해야 할 객체의 속성과 변수 이름이 다를 때

const person = {
  name: "장세원",
  country: "korea",
};

// let fullName = person.name;

let { name: fullName, country: place } = person;
console.log(fullName, place); // 장세원 korea

// ex4 - 내부 객체의 구조 분해

const student = {
  name: "둘리",
  age: 10,
  scores: {
    Math: 79,
    Korean: 90,
    Science: 100,
  },
};

const {
  name: studentName,
  scores: { Math = 0, Korean = 0, Science = 0, Music = 0 },
} = student;
console.log(
  `${studentName}의 성적\n 수학:${Math} 국어:${Korean} 과학:${Science} 음악:${Music}`
);
//둘리의 성적 수학:79 국어:90 과학:100 음악:0

// ex5 - 함수의 파라미터
var averageScore = function ({
  name,
  scores: { Math = 0, Korean = 0, Science = 0, Music = 0 },
}) {
  console.log(
    `${name}의 평균은 ${(Math + Korean + Science + Music) / 4}점 입니다.`
  );
};

averageScore(student); // 둘리의 평균은 67.25점 입니다.

// ex7 - 배열의 구조분해 기본
const color = [155, 200, 87];
[red, green, blue] = color;
console.log(red, green, blue); // 155 200 87

// 배열의 구조분해 디폴트 값
[red = 0, green = 0, blue = 0, alpha = 0] = color;
console.log(red, green, blue, alpha); // 155 200 87 0

// ex8 - skip values
let [, , colorOfBlue = 0] = color;
console.log(colorOfBlue); // 87

// swap values
x = 10;
y = 20;
console.log(x, y); // 10 20
let temp = x;
x = y;
y = temp;
console.log(x, y); // 20 10

// >>>>>>>>>>>
[x, y] = [y, x];
console.log(x, y); // 10 20

// ex9 - ...array spread operator
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
let [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, otherColors);
// red orange [ 'yellow', 'green', 'blue', 'indigo', 'violet' ]

// console.log("Colors of Rainbow : ", rainbow);
console.log("Colors of Rainbow : ", ...rainbow);
// Colors of Rainbow :  red orange yellow green blue indigo violet

// red:orange:yellow
// var f = function (...colors) {
//   //   console.log(arguments); // [Arguments] { '0': 'red', '1': 'yellow', '2': 'blue' }
//   return colors.join(":");
// };

s = ((...colors) => colors.join(":"))("red", "yellow", "green");
console.log(s); // red:yellow:green
