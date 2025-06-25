import React from 'react';
import styles from '../assets/css/refTestComponent.module.css';
import ScrollToTop from '../components/ScrollToTop';
import Carousel from '../components/Carousel';

export default function RefTest() {
  return (
    <div className={styles.container}>
      {/* 스크롤 */}
      <ScrollToTop />
      {/* image 캐러셀 */}
      <Carousel />
    </div>
  );
}
