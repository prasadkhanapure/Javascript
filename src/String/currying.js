const curringFunction = (x) => {
  return (y) => {
    return (z) => {
      console.log(x + y + z);
    };
  };
};

curringFunction(10)(20)(30);