for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// var is function-scoped, so all callbacks share the same i.
// By the time the callbacks run, the loop has finished and i is 3.
// var creates only one binding, shared across all iterations.
// 3,3,3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// 0,1,2 => let is block-scoped.
// let creates a new binding per iteration, each callback gets its own i.
// In a for loop, let creates a new block-scoped binding for each iteration.
// Each setTimeout callback closes over a different i, so the logged values are 0, 1, and 2.

console.log(Boolean([])); // Boolean([]) => true => Array is an Object in JS
console.log(Boolean({})); // Boolean({}) => Boolean(Object) => true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(0)); // false
