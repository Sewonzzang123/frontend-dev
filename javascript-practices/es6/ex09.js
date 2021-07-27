const foods = [
  { no: 1, name: "Bread", quantity: 10 },
  { no: 2, name: "Egg", quantity: 5 },
  { no: 3, name: "Milk", quantity: 50 },
  { no: 4, name: "Carrot", quantity: 100 },
];

const arr1 = [];
foods.forEach((food, index) => {
  arr1[index] = { no: food.no, n: food.name, q: food.quantity };
});

console.log(arr1);

const arr2 = foods.map((food) => {
  ({ no: food.no, name: food.name, quantity: food.quantity });
});

console.log(arr2);
