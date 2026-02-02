// Why Promise Chaining & not async-await
// using .then() is better here because it preserves parallel execution.
// async-await inside a loop would make the execution sequential, which changes the behavior from Promise.all

const customPromiseAll = (promisesFromRequests) => {
  const promise = new Promise((resolve, reject) => {
    if (promisesFromRequests.length === 0) {
      resolve([]);
      return;
    }

    let completed = 0;
    const results = [];

    promisesFromRequests.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          completed === promisesFromRequests.length && resolve(results);
        })
        .catch(reject);
    });
  });

  return promise;
};

const fetchCall = async (element) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${element}`,
  );
  const response = await data.json();
  return response;
};

const getMultipleRequests = async () => {
  const arrayOfElement = [1, 2, 3, 4, 5];
  const requests = arrayOfElement.map((element) => fetchCall(element));
  const responses = await customPromiseAll(requests);
  console.log(responses);
};

getMultipleRequests();
