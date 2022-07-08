import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import { useNavigate } from 'react-router-dom';
import { http } from '../../utils/http/http';

type TSignInResponse = {
  kind: string
  localId: string
  email: string
  displayName: string
  idToken: string
  registered: boolean
  refreshToken: string
  expiresIn: string
  error: string
};

const SignIn: React.FC = () => {

  const navigate = useNavigate();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleOnChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnClick = () => {
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC2Xx-7x-8mOqXqTI7JUYbL2MiDbd76KBw`;
    const body = {
      email: login,
      password: password,
      returnSecureToken: true
    };

    const resp = http<TSignInResponse>(url, body);

    resp.then(response => {
      // console.log('resp ', response.parsedBody?.email)
      if (response.status === 200) {
        navigate('/');
      }
      else {
        setError('Incorrect Login');
      }
    });
  };

  return (
    <div className={styles.SignIn}>
      Экран входа
      <input
        placeholder={'Введите логин'}
        onChange={handleOnChangeLogin}
        value={login}
      />
      <input
        type={"password"}
        placeholder={'Введите password'}
        onChange={handleOnChangePassword}
        value={password}
      />
      {error && <span>{error}</span>}
      <button
        onClick={handleOnClick}>
        Login
      </button>

    </div>
  );
};

export default SignIn;
