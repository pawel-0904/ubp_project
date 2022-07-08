const removeUndefinedFields = (obj = {}) => {
  const filteredObject = { ...obj };
  Object.keys(filteredObject).forEach(key =>
    filteredObject[key] === undefined ? delete filteredObject[key] : {}
  );

  return filteredObject;
};

export default removeUndefinedFields;
