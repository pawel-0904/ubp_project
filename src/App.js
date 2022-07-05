import React, {useEffect} from 'react';
import logo from './assets/icons/logo.svg'
import styles from './App.module.scss';
import SwitchButton from "./components/Controls/SwitchButton/SwitchButton";
import Button from  './components/Controls/Button/Button';
import styled from 'styled-components'
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import C from './constants/C'
// import { Main, SignIn } from './containers';
import {SignIn, Main, Register, Settings, General} from './containers';
import Header from "./containers/Header/Header";
// import { useNavigate } from 'react-router-dom';
// import useGo from './hooks/useGo';
// import useLocation from './hooks/useLocation'

const AppBody = () => {

  // const go = useGo();
  //
  // let navigate = useNavigate();
  //
  // console.log('location ', location.pathname);
  //
  //
  // useEffect(() => {
  //
  //   return go(C.routes.SIGN_IN)
  // },[go])
  // //
  // console.log('useGo(C.routes.SIGN_IN); ', go(C.routes.SIGN_IN));

  const user = false;

  return (
    <>
      {/*<Header />*/}
      <Routes basename={C.routes.MAIN}>
        <Route exact path={C.routes.MAIN} element={<Main/>} >
          <Route path={'settings'} element={<Settings/>} />
          <Route exact path={C.routes.REGISTER} element={!user ? <Navigate to={C.routes.SIGN_IN} replace /> :  <Register />} />

          {/*<Route path={C.routes.GENERAL}  element={<General />} />*/}
          <Route index element={<General />} />
        </Route>

        <Route path={C.routes.SIGN_IN} element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
        {/*<SwitchButton />*/}
      </Routes>
    </>
  )
};

const App = ({ children }) =>
  (
    <div className={styles.App}>
      {/*<header className={styles.App_header}>*/}
      <Router basename={'/'}>
        {/*<Router basename={process.env.PUBLIC_URL}> //TODO: вот тут потом поставить норм переменную*/}
        {/*<img src={logo} className={styles.App_logo} alt="logo" />*/}
        <AppBody />
        {/*<Header />*/}
        {/*{children}*/}

        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to Reload.*/}
        {/*  Calc 1 + 1 = {1+9}*/}
        {/*</p>*/}
        {/*<SwitchButton />*/}
        {/*<a*/}
        {/*  className={styles.App_link}*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        {/*<SwitchButton></SwitchButton>*/}
        {/*<ButtonStyled/>*/}
        </Router>
      {/*</header>*/}
    {/*</Router>*/}
    </div>
  );

export default App;

const ButtonStyled = styled(Button)`
  font-weight: 100;
  margin: 5rem 20rem;
`;
