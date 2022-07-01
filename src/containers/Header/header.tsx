import React from 'react';
import { NavLink } from "react-router-dom";
import useGo  from '../../hooks/useGo';

const Header = () => {
   const go = useGo();
  return (
  <header>
    <nav>
      <ul>
        <li><NavLink exact to={'/'} >Main</NavLink></li>
        <li><NavLink exact to={'/settings'}>Settings</NavLink></li>
        <li><NavLink exact to={'/signIn'}>SignIn</NavLink></li>
      </ul>
    </nav>
  </header>
)}
;

export default Header;
