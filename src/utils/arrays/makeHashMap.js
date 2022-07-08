const makeHashMap = (arr, key = 'id') =>
  arr.reduce((acc, curr) => ({ ...acc, [curr[key]]: curr }), {});

export default makeHashMap;
