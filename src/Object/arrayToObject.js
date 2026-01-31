const firstArray = [
  ["swiggy", 120],
  ["zomato", 230],
  ["dunzo", 400],
  ["swiggy", 100],
];

// first method to convert from array to object
const firstObject = Object.fromEntries(firstArray);
// Removes duplicate key with last value, no warning.
console.log(firstObject);

// second method to convert from array to object
const secondArray = ["first", "second", "third", "fourth"];
const secondObject = {};
secondArray.forEach((value, index) => {
  secondObject[index] = value;
});

console.log(secondObject);

// Third method to convert from array to object
const object = firstArray.reduce((accumulator, [key, value]) => {
  accumulator[key] = value;
  return accumulator;
}, {});

console.log(object);
