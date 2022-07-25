import React, {useState} from 'react';
import styles from './SignIn.module.scss';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from "firebase/auth";
import {Checkbox, FormControlLabel, TextField, Box, Button} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

type TAuthUser = {
  login?: string,
  password?: string,
  isRememberMe?: boolean
}

const SignIn: React.FC = () => {

  const authUser: TAuthUser = JSON.parse(localStorage.getItem('authUser') || '{}');

  const navigate = useNavigate();

  const [login, setLogin] = useState<string>(authUser.login || '');
  const [password, setPassword] = useState<string>(authUser.password || '');
  const [error, setError] = useState<string>('');
  const [isRememberMeState, setIsRememberMeState] = useState<boolean>(authUser.isRememberMe || false);

  const handleOnChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleOnChangePassword: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnClick = () => {
    const auth = getAuth();

    if (isRememberMeState) {
      localStorage.setItem('authUser', JSON.stringify({login: login, password: password, isRememberMe: isRememberMeState}));
    }
    else {
      localStorage.setItem('authUser', JSON.stringify({login: '', password: '', isRememberMe: false}));
    }

    // console.log('auth ', auth)

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, login, password)
          .then(() => {
            navigate('/');
          }
      )
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError('Неверный логин или пароль');
            console.log('Error_SignIn ', errorCode + errorMessage)});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error_SetPersistence', errorCode + errorMessage)
      });
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleOnClick();
    }
  };

  const handleOnChangeCheck = () => {
    setIsRememberMeState(prevState => !prevState);
  }

  return (
    <div className={styles.SignIn}>
      <div className={styles.SignIn__Wrapper}>
        {/*<TextField*/}
        {/*  className={styles.Input}*/}
        {/*  required*/}
        {/*  id="login"*/}
        {/*  label="Login"*/}
        {/*  defaultValue={login}*/}
        {/*  onChange={handleOnChangeLogin}*/}
        {/*  size={"small"}*/}
        {/*  // placeholder="Login"*/}
        {/*/>*/}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 5 }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            // className={styles.Input}
            // sx={{width: 170}}
            required
            id="login"
            label="Login"
            defaultValue={login}
            onChange={handleOnChangeLogin}
            size={"small"}
            // placeholder="Login"
          />
        </Box>
        <Box sx={{height: 70}}>
          <TextField
            // className={styles.Input}
            // sx={{marginBottom: 5}}
            // sx={{width: 170}}
            required
            id="password"
            label="Password"
            type={"password"}
            defaultValue={password}
            onChange={handleOnChangePassword}
            size={"small"}
            onKeyDown={handleOnKeyDown}
            helperText={error}
            error={!!error}
          />
        </Box>

        <FormControlLabel
          control={<Checkbox
            color={"default"}
            onChange={handleOnChangeCheck}
            checked={isRememberMeState}
            size="small"
          />}
          label="Запомнить меня" />
        {/*{error && <span>{error}</span>}*/}
        <Button onClick={handleOnClick} variant="outlined" color={"inherit"}>
          Sign In
        </Button>
      </div>

    </div>
  );
};

export default SignIn;
