const foods = [
  { no: 1, name: "Bread", quantity: 10 },
  { no: 2, name: "Egg", quantity: 20 },
  { no: 3, name: "Milk", quantity: 50 },
  { no: 4, name: "Carrot", quantity: 20 },
];

// quantity가 20인 애들만 모으기(filter)
const result = foods.filter(
  (food) =>
    // 조건
    food.quantity == 20
);
console.log(result);
// return false : []
//return food.quantity == 20 : [
//   { no: 2, name: 'Egg', quantity: 20 },
//   { no: 4, name: 'Carrot', quantity: 20 }
// ]
