const firstCounter = () => {
  let count = 0;
  const increment = () => {
    console.log("Basic Closure Counter", ++count);
  };
  return increment;
};

const incrementCounter = firstCounter();
incrementCounter();
incrementCounter();
incrementCounter();

// Closure with prop
const secondCounter = () => {
  let count = 0;
  const increment = (baseValue) => {
    ++count;
    const latestValue = baseValue + count;
    console.log("Basic Closure Counter With Prop", latestValue);
  };
  return increment;
};

const IncrementCounterWithProp = secondCounter();
IncrementCounterWithProp(100);
IncrementCounterWithProp(100);
IncrementCounterWithProp(100);

const counter = () => {
  let count = 0;
  return () => ++count;
};

console.log("Direct Closure: ",counter()());
console.log("Direct Closure: ",counter()());
//Each call to counter() creates a new closure
// count resets to 0 every time

const thirdCounter = counter();
console.log("Closure via Function: ",thirdCounter());
console.log("Closure via Function: ", thirdCounter());
//counter() runs once
// count lives inside that one closure, thirdCounter() keeps reusing it
// Closures only persist when you keep a reference to the returned function.