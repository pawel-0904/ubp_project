import { atom } from "recoil";

export type TAuthAtom = {
  [key: string]: any;
}

const getAuthFirebaseAtom = atom<TAuthAtom>({
  key: 'AuthAtom', // firebase результат вызова функции getAuth();
  default: {},
});

export default getAuthFirebaseAtom;