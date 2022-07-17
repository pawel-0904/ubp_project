import { atom } from "recoil";

const isAuth = JSON.parse(localStorage.getItem('isAuthUser') || 'false');

console.log('isAuth ', isAuth);

const isAuthState = atom({
  key: 'isAuthState', // была ои пройдена аутентификвция
  default: isAuth, // дефолтное (начальное) значение
});

export default isAuthState;
