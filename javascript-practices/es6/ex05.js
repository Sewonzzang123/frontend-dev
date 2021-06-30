// 5. Arrow Function (람다)

const power = function (x) {
  return x * x;
};
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  process.stdout.write(`${number}:${power(number)}\t`); // 1:1     2:4     3:9     4:16    5:25
});
console.log(`\n-------`);
// ex1
numbers.forEach(function (number) {
  //   let result = ((x) => {
  //     x * x;
  //   })(number);

  process.stdout.write(
    `${number}:${((x) => {
      return x * x;
    })(number)}\t`
  ); // 1:1     2:4     3:9     4:16    5:25
});

console.log(`\n-------`);
// ex2
const power2 = (x) => x * x;
numbers.forEach(function (number) {
  //   let result = ((x) => {
  //     x * x;
  //   })(number);

  process.stdout.write(`${number}:${power2(number)}\t`); // 1:1     2:4     3:9     4:16    5:25
});

// ex3
console.log(`\n-------`);
// ex2
numbers.forEach((number) => {
  process.stdout.write(`${number}:${((x) => x * x)(number)}\t`); // 1:1     2:4     3:9     4:16    5:25
});

// ex4 - 여러행 함수
[5, 3, 15, 1045, 43, 92].forEach((e) => {
  if (e % 5 == 0) {
    process.stdout.write(`${e}\t`); // 5	15	1045
  }
});

// ex5 : this를 어휘적 바인딩(Lexical Binding)
const dooly = {
  name: "둘리",
  friends: ["또치", "마이콜", "희동이", "길동", "도우너"],
  printFriends: function () {
    this.friends.forEach((f) => {
      console.log(`${this.name}의 친구 ${f}`);
    });
  },
};

dooly.printFriends();
