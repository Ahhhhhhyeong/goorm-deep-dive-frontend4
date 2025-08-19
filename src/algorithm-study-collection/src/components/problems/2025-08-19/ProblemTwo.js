'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemTwo() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState([
    [1, 4],
    [3, 2],
    [4, 1],
  ]);
  const [input2, setInput2] = useState([
    [3, 3],
    [3, 3],
  ]);

  useEffect(() => {
    const answer = solution(input);
    setResult(answer);
  }, [input]);

  function solution(arr1, arr2) {
    var answer = [[]];
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
