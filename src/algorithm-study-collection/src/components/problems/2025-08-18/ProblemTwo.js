'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemTwo() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState('[](){}');
  //cdcd = 0
  useEffect(() => {
    const answer = solution(input);
    setResult(answer);
  }, [input]);

  function solution(s) {
    let answer = 0;
    const str = s.split('');
    const stack = str;
    for (let i = 0; i < str.length; i++) {
      let pop = stack.splice(0, 1);
      stack.push(pop[0]);

      // stack의 값이 올바른 괄호인지 체크
      if (check(stack)) {
        answer++;
      }
    }

    return answer;
  }

  // 올바른 괄호 체크
  function check(arr) {
    const stack = [];
    for (const char of arr) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        const last = stack.pop();
        if ((char === ')' && last !== '(') || (char === '}' && last !== '{') || (char === ']' && last !== '[')) {
          return false;
        }
      }
    }
    return stack.length === 0;
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
