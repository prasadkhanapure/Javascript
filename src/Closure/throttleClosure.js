// scroll → run → ignore → ignore → run → ignore
// Throttle ensures a function runs at a fixed rate, regardless of how often it’s triggered.

const throttle = (logMethod, delay) => {
  let lastThrottleTimer = 0;

  return (...args) => {
    const currrentThrottleTimer = Date.now();
    if (currrentThrottleTimer - lastThrottleTimer > delay) {
      lastThrottleTimer = currrentThrottleTimer;
      logMethod(...args);
    }
  };
};

const logMethod = (...args) => console.log(...args);
const firstThrottle = throttle(logMethod, 1000);

firstThrottle("First Throttle", "new string", "test"); // runs
firstThrottle("Second Throttle", "test"); //ignore
firstThrottle("Third Throttle"); //ignore
firstThrottle("Fourth Throttle", "test"); //ignore last 3 because operations happen to fast

const object = {
  firstString: "Hello World",
  log(string) {
    console.log(this.firstString, string);
  },
};

object.throttled = throttle(object.log.bind(object), 10);
object.throttled("This is JS");
console.log(object);
