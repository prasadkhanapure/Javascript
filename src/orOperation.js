// || returns the first truthy value, not true.
// OR returns first truthy operand, otherwise the last operand.

console.log("JS" || "HTML"); // "JS"
console.log("" || "HTML"); // "HTML"
console.log(0 || 42); // 42

const log = () => {
  console.log("called");
  return true;
};

true || log(); // log NOT called
false || log(); // log called

const count = 0;
const finalCount = count || 10;
console.log(finalCount);

console.log(true || (false && false)); // true
// && has higher precedence than ||. Hence it parsed as true || (false && false)

const obj = {} || { a: 1 };
console.log(obj); // {} => {} is truthy

// || has lower precedence than ??
// const value = "" || null ?? "default";  // SyntaxError
const newValue = ("" || null) ?? "default";
console.log(newValue);
