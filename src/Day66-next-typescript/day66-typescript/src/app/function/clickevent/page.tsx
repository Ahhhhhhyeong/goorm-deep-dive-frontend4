'use client';
import React from 'react';

export default function functionTest2() {
  function clickBtn() {
    alert('클릭했따');
  }

  return (
    <div>
      <h3 className='text-lg font-bold'>이벤트 함수 만들기</h3>
      {/* 클릭했을 때 이벤트 실행 */}
      <button onClick={clickBtn}>이벤트 실행~</button>
    </div>
  );
}
