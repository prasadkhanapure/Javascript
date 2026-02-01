// Create New Copy of array or Object
// Understand Shallow or Deep Clone in src\shallowDeepObject.js
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [...firstArray]; // Shallow Copy
console.log(secondArray);

// Concatenating arrays or Objects
const thirdArray = [...firstArray, ...secondArray];
console.log(thirdArray);

// 3. Split string
const string = "hello World";
const splittedChar = [...string];
// str.split("") is better version because of Unicode
console.log(splittedChar);

// 4. Destructuring
const movie = [
  "Life of Pie",
  2011,
  "Shahrukh Khan",
  "Ranveer Singh",
  "Ayushman Khuarana",
];

const [, , ...actors] = movie;
// Rest (...) in destructuring must be last.
console.log(actors);

// Where spread shines in real code immutable updates,Function argument forwarding
// Safe array or object cloning, Cleaner concatenation, Working with iterables
