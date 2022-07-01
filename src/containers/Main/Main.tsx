import React from 'react';
import styles from './Main.module.scss';
import R from '../../resourses/R';
import useGo  from '../../hooks/useGo';
import { useLocation } from 'react-router-dom';
import Tabs from "../../components/Controls/Tabs/Tabs";
import Tab from "../../components/Controls/Tabs/Tab/Tab";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import C from "../../constants/C";
import {Settings, SignIn} from "../index";

const navigationTabs = R.dictionary.Pages.navigationTabs;
const navigationTabsList = Object.values(navigationTabs);

const Main: React.FC = () => {

  const go = useGo();
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
    </div>
    {/*<Switch>*/}
    {/*  <Route path={C.routes.SETTINGS} component={Settings} />*/}
    {/*  <Route path={C.routes.SIGN_IN} component={SignIn} />*/}
    {/*</Switch>*/}
  </>
  );
};

export default Main;