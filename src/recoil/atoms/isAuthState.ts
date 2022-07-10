import { atom } from "recoil";

const isAuthState = atom({
  key: 'isAuthState', // была ои пройдена аутентификвция
  default: false, // дефолтное (начальное) значение
});

export default isAuthState;
