import { atom } from "recoil";

const isAuth = JSON.parse(localStorage.getItem('isAuthUser') || 'false');

const isAuthState = atom({
  key: 'isAuthState', // была ои пройдена аутентификвция
  default: false, // дефолтное (начальное) значение
});

export default isAuthState;
