// In JavaScript, var, let, and const are all hoisted.
// but, let and const are placed in a Temporal Dead Zone from the start of the block 
// until their declaration is evaluated, 
// so accessing them before initialization throws a ReferenceError.

// var     → hoisted + initialized (undefined)
// let     → hoisted + uninitialized (TDZ)
// const   → hoisted + uninitialized (TDZ)

console.log(a); // undefined
var a = 10;

console.log(c); // ReferenceError
const c = 30;

console.log(b); // ReferenceError
let b = 20;