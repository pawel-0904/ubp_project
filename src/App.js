import React from 'react';
import logo from './assets/icons/logo.svg'
import logo2 from './assets/icons/logo512.png'
import styles from './App.module.scss';
import SwitchButton from "./components/Controls/SwitchButton/SwitchButton";
import Button from  "./components/Controls/Button/Button";
import styled from 'styled-components'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <img src={logo} className={styles.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to Reload.
          Calc 1 + 1 = {1+9}
        </p>
        <SwitchButton />
        <a
          className={styles.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*<SwitchButton></SwitchButton>*/}
        <ButtonStyled/>
      </header>
    </div>
  );
}

export default App;

const ButtonStyled = styled(Button)`
  font-weight: 100;
  margin: 5rem 20rem;
`;
