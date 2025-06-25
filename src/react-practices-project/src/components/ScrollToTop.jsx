import React, { useEffect, useRef, useState } from 'react';
import styles from '../assets/css/refTestComponent.module.css';

export default function ScrollToTop() {
  const containerRef = useRef(null);
  const [msg, setMsg] = useState(['메시지 1', '메시지 2']);

  useEffect(() => {
    // endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    //current에 스크롤 높이를 알 수 있음!!
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
  }, [msg]);

  const handleMsg = () => {
    setMsg((prev) => [...prev, `메시지 ${msg.length + 1}`]);
  };
  // 스크롤 위로 올리기
  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    // topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <h1 className={styles.title}>스크롤 투톱(Scroll-to-Top)</h1>
      <div ref={containerRef} className={styles.subcontainer}>
        {/* <div ref={topRef} /> */}
        {msg.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        {/* <div ref={endRef} /> */}
      </div>
      <button onClick={handleMsg} className={styles.btnAdd}>
        메시지 추가하기
      </button>
      <button onClick={scrollToTop} className={styles.btnAdd}>
        위로가기
      </button>
    </div>
  );
}
