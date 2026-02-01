// reduce = repeatedly combine values into ONE final result
//Simple reduce array method
const firstArray = [1, 2, 3, 4, 5];

const sum = firstArray.reduce((result, element) => {
  return (result += element);
}, 0);
// result(accumulator) starts at 0. Always pass this initial value
console.log(sum); // 15

// Convert array to object of count
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const fruitsCount = fruits.reduce((accum, fruit) => {
  accum[fruit] = accum[fruit] || 0 + 1;
  return accum;
}, {});
console.log(fruitsCount); // {"apple": 2, "banana":2,"orange":1}

// Reduce to a Map (real-world)
const restaurantData = [
  ["swiggy", 120],
  ["zomato", 230],
  ["swiggy", 100],
  ["zomato", 130],
  ["ubereats", 180],
];

const totalOrders = restaurantData.reduce((map, [key, value]) => {
  map.set(key, (map.get(key) || 0) + value);
  return map;
}, new Map());
console.log(totalOrders);

// Reduce to flatten array without flat() method
const nestedArray = [1, [2, 3, [4, 5, 6]], 7];

const flattenArray = (nestedArray) => {
  const flatArray = nestedArray.reduce((result, element) => {
    if (Array.isArray(element)) result.push(...flattenArray(element));
    else result.push(element);

    return result;
  }, []);
  return flatArray;
};
console.log(flattenArray(nestedArray));

// Reduce to group objects (very common in UI)
const users = [
  { role: "admin", name: "A" },
  { role: "user", name: "B" },
  { role: "admin", name: "C" },
];

const groupTogether = users.reduce((result, user) => {
  // console.log(result[user.role]);
  // This validation is converting {} into {admin: []}
  if (!result[user.role]) result[user.role] = [];
  result[user.role].push(user);
  return result;
}, {});

console.log(groupTogether);
