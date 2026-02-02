// It is use of native Promise.all, it is NOT a Promise.all implementation

const fetchCall = async (element) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${element}`,
  );
  const response = await data.json();
  return response;
};

const getMultipleRequests = async () => {
  const arrayOfElement = [1, 2, 3, 4, 5];
  const requests = arrayOfElement.map((element) => fetchCall(element)); // requests has 5 promises 
  const responses = await Promise.all(requests);
  console.log(responses);
};

getMultipleRequests();
