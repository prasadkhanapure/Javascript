const updateObject = (user) => {
  user.age = 30; // object mutation
  console.log(user);
  user = { name: "New User", age: 40 }; // reassigns the local variable
  console.log(user);
};

// Function params are local variables, Reassigning user only changes the local reference
// It has NOTHING to do with const (Even if object declared with let, behavior would be the same.)

const person = { name: "Prasad", age: 25 };
updateObject(person);
console.log(person);

// Objects are passed by reference value.
// Reassigning the parameter does not affect the original reference.

// Immutable update
const updatePerson = (person) => {
  return { ...person, age: 35 };
};

const newPerson = updatePerson(person);
console.log(newPerson);

// Object equality
const a = { x: 1 };
const b = { x: 1 };
const c = a; // object assigns reference where it stored to other object

console.log(a === b); // false
console.log(a === c); // true