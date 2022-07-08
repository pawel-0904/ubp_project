export default (length = 0, offset = 0) => {
  return new Array(length).fill(0).map((el, index) => index + offset);
};
