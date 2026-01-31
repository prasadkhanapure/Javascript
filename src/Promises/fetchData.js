const fetchData = () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((mayur) => {
        return mayur.json();
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
    let res = await response.json();
    console.log(res);
  } else {
    alert("HTTP-Error: " + response.status);
  }
};

fetchData();
fetchDataUsingAsyncAwait();
