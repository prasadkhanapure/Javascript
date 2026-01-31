const createSearchFetcher = () => {
  let latestRequestId = 0;

  return async (query) => {
    const requestId = ++latestRequestId;
    //latestRequestId stored in the lexical scope of createSearchFetcher
    // That environment stays alive because the returned function still needs it

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${query}`,
    );
    const data = await response.json();
    // if (requestId !== latestRequestId) return;

    // Only the latest request reaches here
    console.log("Rendering:", query, data);
  };
};

const fetchSearchResults = createSearchFetcher();

fetchSearchResults(1);
fetchSearchResults(2);
fetchSearchResults(3);
