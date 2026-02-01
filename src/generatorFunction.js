// That * changes everything.
//  A generator function you can pause and resume, while it remembers where it was.
// You CANNOT write a generator as an arrow function because arrows don’t support yield or execution pausing.
// “But async functions work with arrow functions, right?”
// Because async returns a Promise It does NOT pause execution the way yield does

function* generator(i) {
  yield i;
  yield i + 10;
}

// yield is a pause point, not a return (where function is over)
// Local variables? Still there.
// Call stack? Gone.
// State? Preserved.

const generatedYieldValue = generator(10);
console.log(generatedYieldValue.next().value); // expected output: 10
console.log(generatedYieldValue.next().value); // expected output: 20

for (const value of generator(10)) {
  console.log("Using Iteration: ", value);
}

// Iteration function
function* countUp(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}
const counter = countUp(4);
for (const value of countUp(4)) {
  console.log(value);
}

// Why generators exist (real reason)
// data is large, lazy computation, you don’t want everything in memory, you need fine-grained control
// Examples: pagination, infinite sequences, async control (before async/await)
