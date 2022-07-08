const parseDateString = str => {
  const [day, month, year] = str.split('.');

  return {
    day: +day,
    month: +month,
    year: +year,
  };
};

export default parseDateString;
