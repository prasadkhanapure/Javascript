// flatten([1, [2, [3, 4], 5]]) → [1, 2, 3, 4, 5]
const array = [1, [2, [3, 4], 5]];

const flattenUsingFlatMethod = (array) => {
  const newArray = array.flat(Infinity);
  // .flat() only flattens one level, but To flatten all levels Infinity is used
  console.log(newArray);
};

flattenUsingFlatMethod(array);

// Without .flat() method with for-of iteration
const flattenRecursiveForIteration = (array) => {
  const latestArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      latestArray.push(...flatten(item));
    } else {
      latestArray.push(item);
    }
  }
  return latestArray;
};
const flatArrayRecursionWithForOf = flattenRecursiveForIteration([1, [2, [3, 4], 5], 6]);
console.log(flatArrayRecursionWithForOf);

// Without .flat() method 7 with reduce method
const flattenWithRecursionUsingReduce = (array) => {
  const newArray = array.reduce((acc, element) => {
    if (Array.isArray(element)) {
      acc.push(...flattenArray(element));
      // why spread operator ?
      // flattenArray returns array, which will be nested array push to accumulator, so spread operator
      // Spread is used when you want to insert array elements, not the array itself.
    } else {
      acc.push(element);
    }
    return acc;
  }, []);
  // console.log(newArray);
  return newArray;
};

const flatArrayWithoutFlatRecursion = flattenWithRecursionUsingReduce(array);
console.log(flatArrayWithoutFlatRecursion);

// Without .flat() & recursive method. ie., using stack
const flattenWithoutRecursion = (array) => {
  const stack = [...array];
  const resultedArray = [];

  while (stack.length) {
    const current = stack.pop();
    //  Why not shift or unshift ?
    // We use pop() because it’s O(1).
    // shift() or unshift() are O(n) and will quietly kill performance.

    if (Array.isArray(current)) {
      stack.push(...current);
    } else {
      resultedArray.push(current);
    }
  }
  console.log(resultedArray.reverse());
  return resultedArray.reverse();
};

flattenWithoutRecursion(array);

// What recursion normally does pauses current function stores state on call stack
// dives into nested array comes back up

// What we’re doing instead stack = manual call stack
// while loop = recursive calls
// push(...current) = dive deeper
// pop() = process last element first
// Same logic. Different tool.

// [1, [2, [3, 4], 5]]
// [2, [3, 4], 5]

// What a stack actually means
// A stack is Last In, First Out (LIFO).
// Operations:
// push → add to top
// pop → remove from top
