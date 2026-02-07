const debounce = (displaySearchedValue, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      displaySearchedValue(...args);
    }, delay);
  };
};

const displaySearchedValue = (...args) => {
  console.log("Searched for: ", ...args);
};

const debounceSearch = debounce(displaySearchedValue, 500);

debounceSearch("a", "New String");
debounceSearch("ab");
debounceSearch("abc");
debounceSearch("abcd");

const object = {
  firstString: "Hello",
  log(string) {
    console.log(this.firstString, string);
  },
};

object.debounced = debounce(object.log.bind(object), 10);
object.debounced("Prasad");
console.log(object);
