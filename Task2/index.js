const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

const foo = obj => {
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] === "number") {
      acc[key] = obj[key] === 1 ? 0 : 1;
      return acc;
    }

    acc[key] = foo(obj[key]);
    return acc;
  }, {});
};

console.log(foo(d));
