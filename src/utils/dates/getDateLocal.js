const getDateLocal = mayBeDate => {
  const date = new Date(mayBeDate);
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .replace('Z', '');

  return local;
};

export default getDateLocal;
