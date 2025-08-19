'use client';
import React, { useState } from 'react';

export default function page() {
  const [mangocnt, setMangoCnt] = useState<number>(0);
  const [berrycnt, setBerryCnt] = useState<number>(0);

  return (
    <div className='max-w-md mx-auto mt-10 p-4'>
      <h2 className='text-2xl font-bold text-center mb-6'>더 좋아하는 과일에 투표를 해주세요.</h2>
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <div className='flex items-center justify-center gap-4 mt-6'>
          {/* 좌측 */}
          <div
            onClick={() => setMangoCnt((prev) => prev + 1)}
            className='flex flex-col items-center justify-center bg-yellow-500 text-white rounded-lg w-32 h-20'>
            <span className='font-semibold'>🥭망고🥭</span>
            <span className='text-2xl font-bold'>{mangocnt}</span>
          </div>

          {/* 우측 */}
          <div
            onClick={() => setBerryCnt((prev) => prev + 1)}
            className='flex flex-col items-center justify-center bg-rose-400 text-white rounded-lg w-32 h-20'>
            <span className='font-semibold'>🍓딸기🍓</span>
            <span className='text-2xl font-bold'>{berrycnt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
