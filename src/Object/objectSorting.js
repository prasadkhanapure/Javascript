const firstOject = {
  first: 36,
  second: 58,
  third: 9,
  fourth: 28,
};

const arrayFromObject = Object.entries(firstOject);
arrayFromObject.sort((a, b) => a[1] - b[1]);

const firstSortedObject = Object.fromEntries(arrayFromObject);
console.log(firstSortedObject);

// Shorting them above
const secondSortedObject = Object.fromEntries(
  Object.entries(firstOject).sort((a, b) => a[1] - b[1]),
);

console.log(secondSortedObject);
