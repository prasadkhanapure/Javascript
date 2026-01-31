const debounce = (displaySearchedValue, delay) => {
  let timerId;

  return (value) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      displaySearchedValue(value);
    }, delay);
  };
};

const displaySearchedValue = (value) => {
  console.log("Searched for: ", value);
};

const debounceSearch = debounce(displaySearchedValue, 500);

debounceSearch("a");
debounceSearch("ab");
debounceSearch("abc");
debounceSearch("abcd");
