'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemOne() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState(3);
  const [input2, setInput2] = useState(2);
  const [input3, setInput3] = useState(5);

  useEffect(() => {
    const answer = solution(input, input2, input3);
    setResult(answer);
  }, [input]);
  /** 1차원 배열 만들기 arr[left] ~ arr[right]까지 값 구하기
   * 규칙 : n*n -> 1차원으로 만들 때 :
   * (n=3일때) 1,2,3, 2,2,3, 3,3,3 규칙이 있음!
   */
  function solution(n, left, right) {
    let answer = [];
    for (let i = left; i <= right; i++) {
      const x = Math.floor(i / n);
      const y = i % n;
      // (x, y) 위치 값
      const value = Math.max(x, y) + 1;
      answer.push(value);
    }
    return answer;
  }

  return (
    <div className='bg-whit space-y-6'>
      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>입력값</h3>
        <p className='border border-pink-400 rounded px-4 py-2'>{JSON.stringify(input)}</p>
        <p className='border border-pink-400 rounded px-4 py-2'>{JSON.stringify(input2)}</p>
        <p className='border border-pink-400 rounded px-4 py-2'>{JSON.stringify(input3)}</p>
      </section>

      <section className='space-y-2'>
        <h3 className='text-md font-semibold text-zinc-800'>출력값</h3>
        <p className='text-zinc-700 text-sm'>{result && JSON.stringify(result)}</p>
      </section>
    </div>
  );
}
