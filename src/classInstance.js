class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  normalFunction() {
    // this points to personInstance
    console.log("Normal Function:", this);
    setTimeout(function () {
      // this points to window as this normal function is called without an owning object
      console.log("Timeout Normal Function:", this);
    }, 100);
  }

  arrowFunction() {
    // this points to personInstance
    console.log("Arrow Function:", this);

    // observe setTimeout is arrow function here
    setTimeout(() => {
      // Arrow function does not create its own this, it takes this pointer from arrowFunction()
      console.log("Timeout Arrow Function:", this);
    }, 0);
  }
}

const firstObject = { name: "Test User", age: 30 };
const personInstance = new Person(firstObject);

personInstance.normalFunction();
personInstance.arrowFunction();
