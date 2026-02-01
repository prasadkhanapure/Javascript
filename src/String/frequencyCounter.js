const countFrequency = (string) => {
  if (typeof string !== "string") return {};
  //   const countArray = string.split(""); OR [...string] (Spread operator ~ modern, safer)

  const frequencyObject = [...string].reduce((result, char) => {
    result[char] = (result[char] || 0) + 1;
    return result;
  }, {});

  return frequencyObject;
};

console.log(countFrequency("aabbbc"));
