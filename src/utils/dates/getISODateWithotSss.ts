const getISODateWithoutSss = (dateInMs?: number)  => {
  return new Date(dateInMs || Date.now()).toISOString().slice(0, 19);
};

export default getISODateWithoutSss;
