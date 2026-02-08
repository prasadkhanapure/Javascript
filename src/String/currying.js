// firstSumFunction & secondSumFunction is one and same!!
const firstSumFunction = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
};
console.log(firstSumFunction(1)(2)(3)); //6

const secondSumFunction = (x) => (y) => (z) => x + y + z;
console.log(secondSumFunction(1)(2)(3)); //6

// thirdSumFunction & fourthSumFunction are oen & same!!
const thirdSumFunction = (a) => (b) => (b ? thirdSumFunction(a + b) : a);
console.log(thirdSumFunction(1)(2)(3)()); //6

const fourthSumFunction = (a) => {
  return (b) => {
    if (b) return fourthSumFunction(a + b);
    return a;
  };
};

console.log(fourthSumFunction(1)(2)(3)()); // 6
