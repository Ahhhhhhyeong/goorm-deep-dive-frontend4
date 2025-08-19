'use client';
import React, { useState } from 'react';

export default function counter() {
  const [msg, setMsg] = useState<string>('아직 클릭되지 않음');
  const [num, setNum] = useState<number>(0);

  function increment(): void {
    setMsg('버튼이 클릭됨!');
    setNum(num + 1);
  }

  return (
    <div>
      <h2>카운터 함수 제작</h2>
      <h3>숫자 증가</h3>
      <button onClick={increment}>증가</button>
      <p>{num}</p>
      <p>{msg}</p>
    </div>
  );
}
