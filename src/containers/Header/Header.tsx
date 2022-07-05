import React from 'react';
import { NavLink }  from "react-router-dom";
import useGo  from '../../hooks/useGo';
import styles from '../Header/Header.module.scss'

const Header = () => {
  const go = useGo();

  return (
  <header className={styles.widget}>
    <nav className={styles.widget__title}>
      <ul className={styles.widget__list}>
        <li><NavLink className={styles.widget__a} to={'/'} style={({isActive}) => ({color: isActive ? 'red' : ''})}>Main</NavLink></li>
        {/*<li><NavLink className={styles.widget__a} to={'/general'} style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}>general</NavLink></li>*/}
        <li><NavLink className={styles.widget__a} to={'/settings'} style={({isActive}) => ({color: isActive ? 'red' : ''})}>Settings</NavLink></li>
        <li><NavLink className={styles.widget__a} to={'/register'}>Register</NavLink></li>
        <li><NavLink className={styles.widget__a} to={'/signIn'}>signIn</NavLink></li>
      </ul>
      <button onClick={go('/signIn')}>кнопка</button>
    </nav>
  </header>
)}
;

export default Header;
