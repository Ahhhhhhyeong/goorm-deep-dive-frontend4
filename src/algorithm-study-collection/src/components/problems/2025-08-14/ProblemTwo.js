'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemTwo() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState('70,50,80,50');
  //cdcd = 0
  useEffect(() => {
    const people = input.split(',');
    console.log(people);
    const answer = solution(people, 100);
    setResult(answer);
  }, [input]);

  function solution(people, limit) {
    let answer = 0;
    //오름차순 정렬
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    while (left <= right) {
      if (people[left] + people[right] <= limit) {
        left++;
      }
      right--;
      answer++;
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
