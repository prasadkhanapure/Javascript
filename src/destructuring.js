// Object destructuring
const temparatures = {
  yesterday: 31,
  today: 27,
  tomorrow: 30,
  location: {
    city: "Pune",
    country: "India",
  },
};

const {
  today,
  location: { city },
} = temparatures;

console.log("Today's temparature: ", today, city);

// Array destructuring
const firstArray = [1, 2, 3, 4, 5];
const [first, , third, ...remaining] = firstArray;
console.log(first, third, remaining);

let secondArray = firstArray.splice(0, 2);
console.log(firstArray);
console.log(secondArray);

const thirdArray = [...firstArray, ...secondArray];
console.log(thirdArray);
