import React, {useEffect, useState} from 'react';
import { NavLink }  from "react-router-dom";
import useGo  from '../../hooks/useGo';
import styles from './NavigationBar.module.scss';
import bank from '../../assets/icons/bank.svg';
import bill from '../../assets/icons/bill.svg';
import moneyBox from '../../assets/icons/moneyBox.svg';
import card from '../../assets/icons/card.svg';
import cx from "clsx";

const NavigationBar = () => {
  const go = useGo();

  const [isOpenSideBarState, setIsOpenSideBarState] = useState<boolean>(true);

  const handleOnClick = () => {
    setIsOpenSideBarState(!isOpenSideBarState);
  };

  return (
  <div className={styles.sidenav__wrapper }>
    <nav className={cx(styles.sidenav,
      { [styles[`sidenav__small`]]: !isOpenSideBarState })
    }>
      {/*Title*/}
      {/*<ul className={styles.widget__list}>*/}
        <a className={styles.sidenav__closeBtn} onClick={handleOnClick} >×</a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/'} style={({isActive}) => ({color: isActive ? 'red' : ''})}>
            <img className={styles.svg} src={bank}/>
            {isOpenSideBarState && <span>Main</span>}
          </NavLink>
        </a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/settings'} style={({isActive}) => ({color: isActive ? 'red' : ''})}>
            <img className={styles.svg} src={bill}/>
            {isOpenSideBarState && <span>Settings</span>}
          </NavLink>
        </a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/register'}>
            <img className={styles.svg} src={moneyBox}/>
            {isOpenSideBarState && <span>Register</span>}
          </NavLink>
        </a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/signIn'}>
            <img className={styles.svg} src={card}/>
            {isOpenSideBarState && <span>SignIn</span>}
          </NavLink>
        </a>

      {/*</ul>*/}
      {/*<button onClick={go('/signIn')}>кнопка</button>*/}
    </nav>
  </div>
)}
;

export default NavigationBar;
