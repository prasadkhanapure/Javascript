// scroll → run → ignore → ignore → run → ignore
// Throttle ensures a function runs at a fixed rate, regardless of how often it’s triggered.

const throttle = (logMethod, delay) => {
  let lastThrottleTimer = 0;

  return (message) => {
    const currrentThrottleTimer = Date.now();
    if (currrentThrottleTimer - lastThrottleTimer > delay) {
      lastThrottleTimer = currrentThrottleTimer;
      logMethod(message);
    }
  };
};

const logMethod = (message) => console.log(message);
const firstThrottle = throttle(logMethod, 100);

firstThrottle("First Throttle"); // runs
firstThrottle("Second Throttle"); //ignore
firstThrottle("Third Throttle");//ignore
firstThrottle("Fourth Throttle");//ignore last 3 because operations happen to fast
