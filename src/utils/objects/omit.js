const omit = (obj, props) => {
  obj = { ...obj };
  props.forEach(prop => delete obj[prop]);
  return obj;
};

export default omit;
