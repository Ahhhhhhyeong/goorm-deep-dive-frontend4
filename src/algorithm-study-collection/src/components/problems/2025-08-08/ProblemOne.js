'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemOne() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState(15);

  useEffect(() => {
    const answer = solution(input);
    setResult(answer);
  }, [input]);

  function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
      let sum = 0;
      // console.log(`${i}회전`);
      if (i === n) {
        answer++;
        break;
      }
      for (let j = i; j <= n; j++) {
        if (sum === n) {
          answer++;
          break;
        }
        sum = sum + j;
      }
      // console.log(`sum: ${sum} && answer: ${answer}`);
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
