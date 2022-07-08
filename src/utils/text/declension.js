// Склонение слов
export default (num, wordArray) => {
  return num % 10 === 1 && num % 100 !== 11
    ? wordArray[0]
    : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
    ? wordArray[1]
    : wordArray[2];
};
