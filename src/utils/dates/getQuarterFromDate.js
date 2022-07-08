const getQuarterFromDate = (date = new Date()) =>
  Math.floor((date.getMonth() + 3) / 3);

export default getQuarterFromDate;
