import React from 'react';
import styles from './Settings.module.scss';

const Settings: React.FC = () => {

  return (
    <div className={styles.Settings}>
      <li><span>Экран с настройками</span></li>
      <li><span>какой-то контпент</span></li>
    </div>
  );
};

export default Settings;