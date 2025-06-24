import React, { useState, useRef, useEffect } from 'react';

export default function TestAutoScroll() {
  /**
   * 버튼 클릭 -> 새로운 글(메시지)생성 -> 박스안에 가득 채우면 스크롤이 생성 -> 제일 마지막 메시지로 자동 이동
   */
  const [message, setMessage] = useState(['샘플 메시지1']);
  const endRef = useRef(null);

  const addMessage = () => {
    setMessage((prev) => [...prev, `샘플 메시지 ${prev.length + 1}`]);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [message]);

  return (
    <div style={{ margin: '3rem' }}>
      <h2>message box</h2>
      <div
        style={{
          height: '200px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
        }}>
        {message.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
        <div ref={endRef} />
      </div>
      <button onClick={addMessage}>메시지 추가</button>
    </div>
  );
}
