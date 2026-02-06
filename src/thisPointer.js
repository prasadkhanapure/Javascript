const firstObject = {
  value: 42,
  regular() {
    console.log(this); // this Points to firstObject
    // Below returned regular function is NOT attached to firstObject anymore.
    return function () {
      return this.value;
    };
    // this === undefined Hence, this.value === undefined
  },
  arrow() {
    console.log(this); // this Points to firstObject
    return () => {
      return this.value;
    };
  },
};

// console.log(firstObject.regular()());
// console.log(firstObject.arrow()());
// Regular function this points to callback function => undefined
// Arrow functions do not have their own this. They capture it from where they are created,
// So in arrow function 'this' points to firstObject => 42

// FIX for regular function
const secondObject = {
  value: 42,
  regular() {
    return function () {
      return this.value;
    }.bind(this);
  },
  printRegular: function () {
    return this.value;
  },
  arrow() {
    return () => {
      return this.value;
    };
  },
};

console.log(secondObject.regular()());
console.log(secondObject.printRegular());
console.log(secondObject.arrow()());
