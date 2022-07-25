import React from 'react';
import styles from './Main.module.scss';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Header from "../Header/Header";

const Main: React.FC = () => {

  return (
    <div className={styles.Main}>
      <NavigationBar />
      <div className={styles.Main__Content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;