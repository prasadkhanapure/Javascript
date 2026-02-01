const items = [
  {
    number: 1,
    requestName: "First Request Name",
    id: "101",
  },
  {
    number: 2,
    requestName: "Second Request Name",
    id: "102",
  },
  {
    number: 3,
    requestName: "Third Request Name",
    id: "103",
  },
  {
    number: 4,
    requestName: "Fourth Request Name",
    id: "104",
  },
];

const numbersArray = [1, 2, 3, 4, 5];
const info = { key: "102" };

const squares = numbersArray.map((number) => number * number);
console.log(squares); // [1, 4, 9, 16, 25]
// When to use: UI rendering, data shaping & Avoid when: you’re filtering or reducing

const filterData = items.filter((item) => item["id"] !== info.key);
console.log("filter Method: ", filterData); // filter out some records

const findOne = items.find((item) => item["id"] === info.key);
console.log("find Method: ", findOne); // Better than filter()[0], find one record

const findIndex = items.findIndex((item) => item["id"] === info.key);
console.log("findIndex: ", findIndex);

numbersArray.some((number) => number > 3); // true
numbersArray.every((number) => number > 0); // true
// When to use some,every: validation, permissions, feature flags

const sortedNUmbers = numbersArray.sort((a, b) => a - b);
console.log(sortedNUmbers); // [5, 4, 3, 2, 1]

const sliceNumber = numbersArray.slice(1,3);
console.log(sliceNumber);  // [2,3]

const spliceNumber = numbersArray.splice(1, 2); // remove 2 items from index 1
console.log(spliceNumber); // [2,3]

// transform? → map
// filter? → filter
// combine? → reduce
// find one? → find
// check? → some / every