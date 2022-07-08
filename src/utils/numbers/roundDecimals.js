const roundDecimals = (num, decimals = 2) => {
  const coeff = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * coeff) / coeff;
};

export default roundDecimals;
