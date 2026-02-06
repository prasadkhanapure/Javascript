Promise.resolve(1)
  .then((x) => {
    console.log(x); //1
    return x + 1;
  })
  .then((y) => {
    console.log(y); //2
    return Promise.resolve(y + 1);
  })
  .then((z) => {
    console.log(z); //3
  });

// When Promise.resolve(1) => Receives the resolved value, not the Promise.
// Each then receives the resolved value of the previous step.
// Returning a Promise flattens automatically.

Promise.reject(1)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((y) => {
    console.log(y);
    return Promise.resolve(y + 1);
  })
  .then((z) => {
    console.log(z);
  })
  .catch((err) => console.log(err));

// Returning Promise.reject() immediately moves control to .catch()
// Remaining .then() blocks are skipped

// Reject Propagation
Promise.resolve(1)
  .then((x) => {
    return Promise.reject("error");
  })
  .then(() => console.log("never runs"))
  .then(() => console.log("also never"))
  .catch((err) => console.log(err))
  .then(() => console.log("runs after catch"));

// error
// runs after catch
// After .catch(), the chain continues as a resolved Promise unless you rethrow.

Promise.resolve()
  .then(() => {
    Promise.reject("error");
  })
  .catch((err) => console.log(err)); // nothing

Promise.resolve()
  .then(() => {
    return Promise.reject("error");
  })
  .catch((err) => console.log(err)); // error
