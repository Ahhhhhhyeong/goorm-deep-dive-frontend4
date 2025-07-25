import React from 'react';
import styles from '../assets/scss/ScssTest3.module.scss';

export default function ScssTest3() {
  return (
    <div className={styles.wrapper}>
      <h1>Scss Mixin 예제</h1>
      <button className={`${styles.btn} ${styles.primary}`}>기본버튼</button>
      <button className={`${styles.btn} ${styles.danger}`}>경고버튼</button>
    </div>
  );
}
