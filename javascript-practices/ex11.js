var colors = ["black", "white", "red", "yellow", "green"];
var fruits = ["orange", "apple", "mango", "banana", "grape"];

// Array 메서드 - concat
var a1 = fruits.concat(colors);
console.log(a1);
// [
//     'orange', 'apple',
//     'mango',  'banana',
//     'grape',  'black',
//     'white',  'red',
//     'yellow', 'green'
//   ]

// Array 메서드 - join
var str = fruits.join(":");
console.log(str); // orange:apple:mango:banana:grape

// Array 메서드 - pop,push : stack지원
var color = colors.pop();
console.log(color); // green
console.log(colors); // [ 'black', 'white', 'red', 'yellow' ]

colors.push("skyblue");
console.log(colors); // [ 'black', 'white', 'red', 'yellow', 'skyblue' ]

// Array 메서드 - reverse
console.log(fruits); // [ 'orange', 'apple', 'mango', 'banana', 'grape' ]
fruits.reverse();
console.log(fruits); // [ 'grape', 'banana', 'mango', 'apple', 'orange' ]

// Array 메서드 - shift
var numbers = [4000, 8000, 3000, 5000, 1000];
console.log(numbers); // [ 4000, 8000, 3000, 5000, 1000 ]
var n = numbers.shift();
console.log(n, numbers); // 4000 [ 8000, 3000, 5000, 1000 ]

// Array 메서드 - slice
var numbers2 = numbers.slice(1, 3);
console.log(numbers2); // [ 3000, 5000 ]
console.log(numbers); // [ 8000, 3000, 5000, 1000 ]

// Array 메서드 - sort
console.log(numbers); // [ 8000, 3000, 5000, 1000 ]
numbers.sort();
console.log(numbers); // [ 1000, 3000, 5000, 8000 ]

// Array 메서드 - splice
// index 부터 count개를 삭제
console.log(fruits); // [ 'grape', 'banana', 'mango', 'apple', 'orange' ]
var fruits2 = fruits.splice(0, 2); /** index, count */
console.log(fruits2); // [ 'grape', 'banana' ]

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10); // 그 자리에 10을 넣겠다
console.log(a2); // [ 1, 2, 3 ]
console.log(a1); // [ 0, 10, 4 ]

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1, 10); // 그 자리에 10을 넣겠다
console.log(a2); // [ 1 ]
console.log(a1); // [ 0, 10, 2, 3, 4 ]

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10); // 자리에 10을 insert
console.log(a2); // []
console.log(a1); // [ 0, 10, 1, 2, 3, 4 ]
