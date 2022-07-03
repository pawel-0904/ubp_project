import React from 'react';
import styles from './Main.module.scss';
import R from '../../resourses/R';
// import useGo  from '../../hooks/useGo';
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import Tabs from "../../components/Controls/Tabs/Tabs";
import Tab from "../../components/Controls/Tabs/Tab/Tab";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import C from "../../constants/C";
import {Settings, SignIn} from "../index";
import Header from "../Header/Header";

const navigationTabs = R.dictionary.Pages.navigationTabs;
const navigationTabsList = Object.values(navigationTabs);

const Main: React.FC = () => {

  // const go = useGo();
  const location = useLocation();

  console.log('location ', location);

  return (
    <>
    <div className={styles.Main}>
      Основной экран
    {/*  <Tabs>*/}
    {/*    {*/}
    {/*      navigationTabsList.map(tab => (*/}
    {/*        <Tab*/}
    {/*          key={tab.id}*/}
    {/*          isActive={location.pathname === tab.route}*/}
    {/*          onClick={go(tab.route)}*/}
    {/*        >*/}
    {/*          {tab.name}*/}
    {/*        </Tab>*/}
    {/*        )*/}
    {/*      )*/}
    {/*    }*/}
    {/*  </Tabs>*/}
    {/*  <nav>*/}
    {/*    <ul>*/}
    {/*      <li><NavLink to={'/settings'}>Settings</NavLink></li>*/}
    {/*    </ul>*/}
    {/*  </nav>*/}
    {/*</div>*/}
      <Header />
      {/*тут что-то будет для основного экрана*/}

      <Outlet />
      {/*<Routes>*/}
      {/*  <Route path={C.routes.SETTINGS} element={<Settings/>} />*/}
      {/*</Routes>*/}
    </div>
      </>
  );
};

export default Main;