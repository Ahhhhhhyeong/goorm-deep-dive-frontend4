'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemTwo() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState('baabaa');
  //cdcd = 0
  useEffect(() => {
    const answer = solution(input);
    setResult(answer);
  }, [input]);

  function solution(s) {
    let answer = -1;
    const arr = s.split('');

    if (arr.length === 1 || arr.length === 0) return 0;
    const tmp = [];
    tmp.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
      let shift = arr[i];
      if (tmp.length != 0 && tmp[tmp.length - 1] === shift) {
        tmp.pop();
      } else if (i != arr.length - 1 || tmp.length === 0) {
        tmp.push(shift);
      }
    }

    return (answer = tmp.length === 0 ? 1 : 0);
  }

  return (
    <div className='bg-whit space-y-6'>
      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>입력값</h3>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='border border-pink-400 rounded px-4 py-2'
        />
      </section>

      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>출력값</h3>
        <p className='text-zinc-700 text-sm'>{result}</p>
      </section>
    </div>
  );
}
