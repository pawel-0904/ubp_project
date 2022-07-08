const getDaysInMonth = date => {
  if (!date) {
    return new Error('Date is not exist');
  }

  const inputDate = new Date(date);

  return new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() + 1,
    0
  ).getDate();
};

export default getDaysInMonth;
