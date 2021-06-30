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

const person = {
  name: "장세원",
  country: "korea",
};

let { name: fullName, country: place } = person;
console.log(fullName, place); // 장세원 korea
