import React, { useState } from 'react';
import styles from '../assets/scss/ScssModuleTest.module.scss';

export default function ScssModuleTest1() {
  const [isActive, setIsActive] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState('홈');

  const className = darkMode ? `${styles.card} ${styles.dark}` : `${styles.card}`;

  return (
    <div>
      <h3>active 예제</h3>
      <div className={`${styles.box} ${isActive ? styles.active : ''}`}>{isActive ? '활성상태' : '미활성 상태'}</div>

      <h3>다크모드 선택 예제</h3>
      <div className={className}>테마카드 입니다.</div>

      <h3>선택된 항목 selected 예제</h3>
      <div>
        <button onClick={() => setSelectedTab('홈')} className={`${selectedTab === '홈' ? styles.selected : ''}`}>
          홈
        </button>
        <button onClick={() => setSelectedTab('마이')} className={`${selectedTab === '마이' ? styles.selected : ''}`}>
          마이
        </button>
      </div>
    </div>
  );
}
