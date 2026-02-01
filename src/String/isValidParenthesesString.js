// "()[]{}" → true
// "({})" → true
// "(]" → false

// If the most recent thing must close first → stack

const isValidStringPair = (string) => {
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (const char of string) {
    if (char in pairs) {
      if (stack.pop !== pairs[char]) {
        return false;
      }
    } else if (Object.values(pairs).includes(char)) {
      stack.push(char);
      console.log(stack);
    }
  }
  return stack.length === 0;
};

const isValid = isValidStringPair("()[string]{}");
console.log("Valid Parentheses String: ",isValid);
