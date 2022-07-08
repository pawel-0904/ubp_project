const zipObject = (keys, values) =>
  keys.reduce((acc, key, idx) => {
    acc[key] = values[idx];
    return acc;
  }, {});

export default zipObject;
