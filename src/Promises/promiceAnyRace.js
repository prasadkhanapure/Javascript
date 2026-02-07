const p1 = Promise.reject("A");
const p2 = new Promise((res) => setTimeout(() => res("B"), 100));
const p3 = Promise.resolve("C");

Promise.any([p1, p2, p3]).then(console.log).catch(console.log); // C
// Promise.any → “Give me the first success. Ignore failures unless everything fails.”

Promise.race([p1, p2, p3]).then(console.log).catch(console.log); // A
// Promise.race → “Whoever finishes first, I don’t care how.” it's a race.