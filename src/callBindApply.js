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
const displayNameUsingBindMethod = displayObject.bind(firstObjct, "Banaras", "India");
displayNameUsingBindMethod();

// Bind Method used on console.log
const log = console.log.bind(document);
log("Hello World");
