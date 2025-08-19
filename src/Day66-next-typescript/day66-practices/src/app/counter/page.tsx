'use client';
import React, { useState } from 'react';

export default function CounterPage() {
  const [num, setNum] = useState<number>(0);

  function increase(): void {
    setNum((prev) => prev + 1);
  }

  function decrease(): void {
    if (num === 0) return;
    setNum((prev) => prev - 1);
  }

  function reset(): void {
    setNum(0);
  }

  return (
    <div className='h-screen flex flex-col items-center justify-between py-20'>
      {/* 상단 글자 */}
      <h3 className='text-center'>카운트</h3>
      {/* 중앙 결과값 */}
      <h2>{num}</h2>
      {/* 하단 버튼 그룹 */}
      <div className='flex gap-4'>
        <button onClick={increase} className='px-4 py-2 bg-blue-500 text-white rounded'>
          숫자 더하기
        </button>
        <button onClick={decrease} className='px-4 py-2 bg-red-500 text-white rounded'>
          숫자 빼기
        </button>
        <button onClick={reset} className='px-4 py-2 bg-gray-500 text-white rounded'>
          숫자 리셋
        </button>
      </div>
    </div>
  );
}
