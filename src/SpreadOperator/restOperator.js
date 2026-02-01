const sum = (...args) => {
  console.log(
    "Reduce sum:",
    args.reduce((sum, element) => sum + element, 0),
  );
};
//...args collects all remaining arguments into a real array at call time, replacing the old arguments object.
sum(1, 2, 3);
sum(1, 2, 3, 4);

const temperatures = {
  today: 77,
};
const { today: highToday } = temperatures;
console.log(highToday);

// Swap variables
let firstNumber = 50;
let secondNumber = 99;
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log("firstNumber: ", firstNumber, "secondNumber: ", secondNumber);

// Rest in array destructuring
const list = [1, 2, 3, 4, 5];
const removeFirstTwo = (list) => {
  const [, , ...remainingArray] = list;
  return remainingArray;
};
const remainingArray = removeFirstTwo(list);
console.log(remainingArray);
