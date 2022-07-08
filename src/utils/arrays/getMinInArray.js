const getMinInArray = (array, field) => {
  const _arr = field ? array.map(el => parseFloat(el[field])) : array;
  return Math.min.apply(Math, _arr);
};

export default getMinInArray;
