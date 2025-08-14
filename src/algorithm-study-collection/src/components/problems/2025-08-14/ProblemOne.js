'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemOne() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState(3);
  const [input2, setInput2] = useState(['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']);

  useEffect(() => {
    const answer = solution(input, input2);
    setResult(answer);
  }, [input]);

  function solution(n, words) {
    const used = new Set();

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const person = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;

      //이미 사용한 단어인지
      if (used.has(word)) {
        return [person, turn];
      }

      // 끝말잇기 규칙 위반
      if (i > 0) {
        const prev = words[i - 1];
        if (prev[prev.length - 1] !== word[0]) {
          return [person, turn];
        }
      }
      used.add(word);
    }

    return [0, 0];
  }

  return (
    <div className='bg-whit space-y-6'>
      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>입력값</h3>
        <p className='border border-pink-400 rounded px-4 py-2'>{input}</p>
        <p className='border border-pink-400 rounded px-4 py-2'>{JSON.stringify(input2)}</p>
      </section>

      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>출력값</h3>
        <p className='text-zinc-700 text-sm'>{JSON.stringify(result)}</p>
      </section>
    </div>
  );
}
