'use client';
import React, { useState } from 'react';

export default function page() {
  const [input, setInput] = useState<string>('');
  return (
    <div className='max-h-screen flex flex-col items-center justify-center gap-14 py-20'>
      <h2>텍스트 입력 & 출력</h2>
      <p className=''>입력값: {input}</p>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='border border-zinc-400 px-3 '
        placeholder='텍스트를 입력해주세요.'
      />
    </div>
  );
}
