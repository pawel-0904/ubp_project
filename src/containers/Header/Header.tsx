import React, {useEffect, useState} from 'react';
import styles from '../Header/Header.module.scss';
import {getAuth} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import C from "../../constants/C";
import {Button} from "@mui/material";
import { AccessAlarm, ExitToApp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon'


const Header: React.FC = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      // console.log('signOut ', auth);
      navigate(C.routes.SIGN_IN)
    }).catch((error) => {
      console.log('signOut_error ', error);
    });
  }

  return (
    <div className={styles.Header}>
      {/*<button*/}
      {/*  className={styles.SingOut}*/}
      {/*  onClick={handleOnClick}*/}
      {/*>*/}
      {/*  SignOut*/}
      {/*</button>*/}
      <Button
        sx={{marginRight: 2}}
        onClick={handleOnClick}
        variant="contained"
        color={"inherit"}
        endIcon={<ExitToApp />}
      >
        Sign Out
      </Button>
    </div>
  )
};

export default Header;