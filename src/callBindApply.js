const firstObjct = {
  name: "First User",
  age: 30,
};

const displayObject = function (city, country) {
  console.log(this.name, this.age, city, country);
};

const secondObjct = {
  name: "Second User",
  age: 27,
};

// Call Method
displayObject.call(firstObjct, "Chennai", "India");

// Apply Method
displayObject.apply(secondObjct, ["Pune", "India"]);

//Bind Method
const displayNameUsingBindMethod = displayObject.bind(
  firstObjct,
  "Banaras",
  "India",
);
displayNameUsingBindMethod();

// Bind Method used on console.log
const log = console.log.bind(document);
log("Hello World");

// It is one and same
const logMethod = (msg) => console.log(msg);
logMethod("Hello World");

// One Function, Three Ways
// To pass additional parameters in function we use call, apply methods
// If something expects a callback, you cannot use call or apply.
// call orapply = execute now
// bind = give function for later

const user = { name: "FirstUser" };

const greet = (city, country) => {
  console.log(this.name, city, country);
};

greet.call(user, "Pune", "India"); // Call this function now, with this object.
greet.apply(user, ["Kochi", "India"]); // Apply this function now, using a list.

const boundGreet = greet.bind(user);
boundGreet("Mumbai", "India"); //Bind this function forever to this object.
