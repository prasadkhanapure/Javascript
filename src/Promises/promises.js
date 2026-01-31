// Promise chaining method
const secondPromise = new Promise((resolve, reject) => {
  const flag = true;
  if (flag)
    setTimeout(() => {
      resolve("TRUE after 1 sec!!");
    }, 1000);
  else
    setTimeout(() => {
      reject("FALSE after 1 sec!!");
    }, 1000);
});

secondPromise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  },
);

//Promise using async-await method
const asyncAwaitMethod = async () => {
  const firstPromise = new Promise((resolve, reject) => {
    const flag = true;
    flag ? resolve(true) : reject(false);
  });

  const result = await firstPromise;
  console.log(result);
};

asyncAwaitMethod();

const asyncAwaitFunction = async () => {
  const thirdPromise = new Promise((resolve, reject) => {
    const flag = true;
    if (flag) {
      setTimeout(() => {
        resolve("Resolved!!");
      }, 1000);
    } else {
      setTimeout(() => {
        reject("Rejected!!");
      }, 1000);
    }
  });

  const response = await thirdPromise;
  console.log(response);
};

asyncAwaitFunction();
