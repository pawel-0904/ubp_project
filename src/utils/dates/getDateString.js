const getDateString = mayBeDate => {
  if (!mayBeDate) return '';

  const date = new Date(mayBeDate);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const day = date.getDate().toString().padStart(2, 0);

  return `${day}.${month}.${year}`;
};

export default getDateString;
