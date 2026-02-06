function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 0
counter.increment(); // 1
console.log(counter.getCount()); //2

// When function createCounter triggers the lexical scope created , counter has that lexical scope
// first time count is 0, and post increment gives 1 for second call of increment method, same for getCount 2
//  since count is already increased, so 2. 

// Encapsulation via closure