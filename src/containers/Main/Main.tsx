import React from 'react';
import styles from './Main.module.scss';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Main: React.FC = () => {

  return (
    <div className={styles.Main}>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Main;