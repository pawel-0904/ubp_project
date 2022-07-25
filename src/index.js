import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { RecoilRoot, useSetRecoilState} from 'recoil';
import getAuthFirebaseAtom  from './recoil/atoms/getAuthFirebaseAtom';

const app = initializeApp({
    apiKey: "AIzaSyC2Xx-7x-8mOqXqTI7JUYbL2MiDbd76KBw",
    authDomain: "ubp2-195e9.firebaseapp.com",
    projectId: "ubp2-195e9",
    storageBucket: "ubp2-195e9.appspot.com",
    messagingSenderId: "1044935683477",
    appId: "1:1044935683477:web:65c854f14535b59a775a9c",
    measurementId: "G-X0DDC3N7ZG"
  }
);

console.log('app ', app)

export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
