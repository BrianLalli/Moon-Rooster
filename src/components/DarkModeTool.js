import React from 'react';
import styles from './DarkModeTool.module.scss';

const DarkModeTooltip = () => (
  <div className={styles["tooltip-container"]}>
    <div className={styles.arrow}></div>
    <div className={styles["tooltip-text"]}>Click here to wake up Moon Rooster 🐓</div>
  </div>
);

export default DarkModeTooltip;

