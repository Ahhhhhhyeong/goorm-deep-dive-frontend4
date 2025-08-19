'use client';
import React, { useState } from 'react';

export default function TodoPage() {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  function clickAdd():void {
    setTodos((prev) => [...prev, input]);
    setInput('');
  }

  return (
    <div className='max-h-screen flex flex-col items-center justify-center gap-14 py-20'>
      <h2>Todo - 리스트 추가</h2>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='border border-zinc-400 px-3 '
        placeholder='텍스트를 입력해주세요.'
      />
      <button onClick={clickAdd}>추가하기</button>
      <div className='flex flex-col gap-2'>
        <h4>TODO</h4>
        <ul>{todos && todos.map((val, idx) => (
          <li key={idx}>
            <input type='checkbox' /> {val}
          </li>
          ))}</ul>
      </div>
    </div>
  );
}
