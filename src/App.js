import React from 'react';
import logo from './assets/icons/logo.svg'
import styles from './App.module.scss';
import SwitchButton from "./components/Controls/SwitchButton/SwitchButton";
import Button from  "./components/Controls/Button/Button";
import styled from 'styled-components'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import C from './constants/C'
// import { Main, SignIn } from './containers';
import { SignIn, Main, Settings }  from './containers';
import Header from "./containers/Header/header";


const AppBody = () => {

  return (
    <>
      <Switch>
        <Route exact path={C.routes.SIGN_IN} component={SignIn} />
        <Route exact path={C.routes.MAIN} component={Main} />
        <Route exact path={C.routes.SETTINGS} component={Settings} />
        {/*<SwitchButton />*/}
      </Switch>
    </>
  )
};

const App = ({ children }) =>
  (
    <div className={styles.App}>
      {/*<header className={styles.App_header}>*/}
      {/*<Router>*/}
        {/*<Router basename={process.env.PUBLIC_URL}> //TODO: вот тут потом поставить норм переменную*/}
        {/*<img src={logo} className={styles.App_logo} alt="logo" />*/}
        {/*<AppBody />*/}
        <Header />
        {children}

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
        {/*</Router>*/}
      {/*</header>*/}
    {/*</Router>*/}
    </div>
  );

export default App;

const ButtonStyled = styled(Button)`
  font-weight: 100;
  margin: 5rem 20rem;
`;
