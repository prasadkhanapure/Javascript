const fetchDataChaining = () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
      });
  } catch (err) {
    console.log(err);
  }
};

const fetchDataUsingAsyncAwait = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (response.ok) {
    let result = await response.json();
    console.log(result);
  } else {
    console.log("HTTP-Error: " + response.status);
  }
};

fetchDataChaining();
fetchDataUsingAsyncAwait();
