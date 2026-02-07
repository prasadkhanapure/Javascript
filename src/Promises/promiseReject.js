async function test() {
  try {
    return Promise.reject("error");
  } catch (error) {
    console.log("catch inside: ", error);
  }
}

test()
  .then((res) => console.log("then:", res))
  .catch((err) => console.log("catch outside:", err));

//   What happens:
// You are returning a rejected Promise, You are NOT throwing synchronously
// try-catch only catches synchronous errors inside the block
// So the rejection escapes the function and is caught by the outer .catch.

// correct usage
const rejectTest = async () => {
  try {
    const error = await Promise.reject("error");
    console.log(error);
  } catch (error) {
    console.log("Catch inside: ", error);
  }
};

rejectTest();
