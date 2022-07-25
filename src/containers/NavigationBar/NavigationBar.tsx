import React, { useState } from 'react';
import { NavLink }  from "react-router-dom";
import styles from './NavigationBar.module.scss';
import { moneyBox, bill, bank, card, exchange, security} from '../../assets/icons/'
import cx from "clsx";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const NavigationBar = () => {

  const [isOpenSideBarState, setIsOpenSideBarState] = useState<boolean>(true);

  const handleOnClick = () => {
    setIsOpenSideBarState(!isOpenSideBarState);
  };

  return (
  <div className={styles.sidenav__wrapper}>
    <nav className={cx(styles.sidenav,
      { [styles[`sidenav__small`]]: !isOpenSideBarState })
    }>
        <a className={styles.sidenav__closeBtn} onClick={handleOnClick} >
          {isOpenSideBarState ?
            // <img className={styles.chevron} src={security} alt={'security'}/> :
            // <img className={styles.chevron} src={exchange} alt={'exchange'} />
            <ArrowCircleLeftOutlinedIcon color={"inherit"}/>:
            <ArrowCircleRightOutlinedIcon color={"inherit"}/>
          }
        </a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/'} style={({isActive}) => ({color: isActive ? 'red' : ''})}>
            <img className={styles.svg} src={bank}  alt={'bank'}/>
            {isOpenSideBarState && <span>Main</span>}
          </NavLink>
        </a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/settings'} style={({isActive}) => ({color: isActive ? 'red' : ''})}>
            <img className={styles.svg} src={bill} alt={'bill'}/>
            {isOpenSideBarState && <span>Settings</span>}
          </NavLink>
        </a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/register'}>
            <img className={styles.svg} src={moneyBox} alt={'moneyBox'}/>
            {isOpenSideBarState && <span>Register</span>}
          </NavLink>
        </a>
        <a>
          <NavLink className={styles.sidenav__a} to={'/signIn'}>
            <img className={styles.svg} src={card} alt={'card'}/>
            {isOpenSideBarState && <span>SignIn</span>}
          </NavLink>
        </a>
    </nav>
  </div>
)}
;

export default NavigationBar;
