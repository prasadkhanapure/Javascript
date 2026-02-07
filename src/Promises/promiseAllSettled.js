const p1 = Promise.resolve(1);
const p2 = Promise.reject("fail");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//  fail
//  As soon as any promise rejects, the entire promise rejects in .all => .then() is skipped
// .catch() receives the rejection reason, Instead we need to use .allSettled
// p1, p2, p3 still execute, but their results are ignored once rejection happens.

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//  [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected", reason: "fail" },
//   { status: "fulfilled", value: 3 }
// ]

// Promise.allSettled waits for all promises and returns their status and result, regardless of success or failure.
