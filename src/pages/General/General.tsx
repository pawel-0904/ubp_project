import React from 'react';
import styles from './General.module.scss';
import { Slider, MenuItem, Button } from "@mui/material";
import { AccessAlarm, CheckCircle } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, limit, where, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const General: React.FC = () => {

  const firestore = getFirestore();

  const auth = getAuth();

  const user = useAuthState(auth);

  const botsRef = collection(firestore, "bots");

  const q = query(botsRef, where("userID", "==", user[0]?.uid));
  // const q = query(botsRef, where("userID", "==", user[0]?.uid), limit(25));

  const [bots, loading, error] = useCollectionData(q);

  console.log('bots ', bots);

  if (error) {
    console.log('Could not get data => error code: ', error.code, ', error message: ', error.message);
  }

  return (
    <div className={styles.General}>
      Экран General
      <Slider
        defaultValue={30}
        // className={styles.Slider}
        sx={{
          width: 300,
          color: 'success.main',
        }}
      />
      <MenuItem selected={true} className="MenuItem" >
        123
      </MenuItem>
      <Button
        className={styles.Button}
        // disabled
        // sx={{
        //   color: 'green',
        // }}
      >
        кнопка
      </Button>
      <AccessAlarm/>
      <DeleteIcon color="secondary"/>
      <CheckCircle />
      <Icon className={styles.Icon}>star</Icon>
    </div>
  );
};

export default General;
