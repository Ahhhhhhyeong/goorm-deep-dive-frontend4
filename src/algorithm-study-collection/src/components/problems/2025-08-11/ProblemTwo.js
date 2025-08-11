'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemTwo() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState('10,2');
  //cdcd = 0
  useEffect(() => {
    const color = input.split(',');
    console.log(color);
    const answer = solution(Number(color[0]), Number(color[1]));
    setResult(answer);
  }, [input]);

  function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow;
    // total의 약수 쌍
    for (let i = 3; i <= total; i++) {
      if (total % i !== 0) continue;
      const j = total / i;
      if (i < j) continue;
      if ((i - 2) * (j - 2) === yellow) {
        return [i, j];
      }
    }
    return answer;
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
