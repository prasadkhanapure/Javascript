// Objects were never designed to be hash maps.
// Map was added to fix that.
// Object = data shape & Map = data behavior\

// use Map when keys are dynamic, not strings, or
// when frequent updates and ordered iteration matter.
// Objects are better for static data shapes.

const firstArray = [
  ["swiggy", 120],
  ["zomato", 230],
  ["dunzo", 400],
  ["swiggy", 100],
];

const firstMap = new Map(firstArray);
console.log(firstMap);
console.log(firstMap.get("zomato")); // 230
firstMap.set("swiggy", 140); // update
firstMap.set("uber", 150); // add
firstMap.delete("uber"); // true
// firstMap.clear();
console.log(firstMap);

const user1 = { id: 1 };
const user2 = { id: 2 };
const cache = new Map();
cache.set(user1, "User 1 data");
cache.set(user2, "User 2 data");

console.log(cache);
console.log(cache.get(user1));

// Convert Map to Object
const secondMap = new Map(firstArray);
const object = Object.fromEntries(secondMap);
console.log(object);

// Map Iteration
for (const [key, value] of firstMap) {
  console.log("Map Iteration: ", key, value);
}
