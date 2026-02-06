const functionTriggerOnlyOnce = (displayString) => {
  let called = false;
  return (string) => {
    if (!called) {
      called = true;
      return displayString(string);
      // return displayString.call(this, string);
      // return displayString.call(this, string);
    }
  };
};

const displayString = (string) => {
  console.log(string);
};

const a = functionTriggerOnlyOnce(displayString);
a("First Call!");
a("Second Call!");
