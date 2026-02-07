console.log("start");

const test = async () => {
  console.log("inside");
  await Promise.resolve();
  console.log("after await");
};

test();
Promise.resolve().then(() => console.log("promise"));
console.log("end");

// output: start, inside, end, after wait, promise
// Reason: asyn-await & Promise chaining are async process
// they go into microtask queue & then event loop.
// await & .then() waits till the promise resolve or reject

// Synchronous phase: start, inside, end
// Microtask queue (order matters)
// The async function continuation is queued before the .then() callback in this case.
