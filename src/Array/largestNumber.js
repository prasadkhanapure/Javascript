const arrayOfNumbers = [34, 78, 19, 45, 8];

const largestNumber = arrayOfNumbers.reduce((accum, current) => {
  return accum > current ? accum : current;
}, arrayOfNumbers[0]);
console.log(largestNumber);

const largestNumberUsingMax = Math.max(...arrayOfNumbers);
console.log(largestNumberUsingMax);
