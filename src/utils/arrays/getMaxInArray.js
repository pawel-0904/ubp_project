const getMaxInArray = (array, field) => {
  const _arr = field ? array.map(el => parseFloat(el[field])) : array;
  const max = Math.max.apply(Math, _arr);
  return isFinite(max) ? max : undefined;
};

export default getMaxInArray;
