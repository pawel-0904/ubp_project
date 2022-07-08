import C from '../../constants/C';

const getMonthsWithId = (
  count = 12,
  startMonth = 0,
  startYear = new Date().getFullYear()
) => {
  return new Array(count).fill(0).map((el, index) => {
    const currentDate = new Date(startYear, startMonth + index, 1);
    return {
      id: currentDate.toString(),
      date: currentDate,
      name: C.common.dates.MONTH_NAMES[currentDate.getMonth()],
      monthNum: currentDate.getMonth(),
      daysCount: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate(),
      year: currentDate.getFullYear(),
    };
  });
};

export default getMonthsWithId;
