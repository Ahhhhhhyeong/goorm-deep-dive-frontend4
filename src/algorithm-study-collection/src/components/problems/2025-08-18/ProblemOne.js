'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemOne() {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState(['banana', 'apple', 'rice', 'pork', 'pot']);
  const [input2, setInput2] = useState([3, 2, 2, 2, 1]);
  const [input3, setInput3] = useState([
    'chicken',
    'apple',
    'apple',
    'banana',
    'rice',
    'apple',
    'pork',
    'banana',
    'pork',
    'rice',
    'pot',
    'banana',
    'apple',
    'banana',
  ]);

  useEffect(() => {
    const answer = solution(input, input2, input3);
    setResult(answer);
  }, [input]);
  /** 할인 기간동안 원하는 제품을 모두 구매할 수 있는, 연속기간의 수 구하기
   * 슬라이딩 윈도우 방식 사용 = 할인기간 10일
   */
  function solution(want, number, discount) {
    let answer = 0;
    const wantMap = new Map();
    // want, number 맵핑
    for (let i = 0; i < want.length; i++) {
      wantMap.set(want[i], number[i]);
    }

    // discount 순환
    for (let i = 0; i <= discount.length - 10; i++) {
      const discountWindow = discount.slice(i, i + 10);
      const discountMap = new Map();

      // 10일 동안 할인된 제품 카운팅
      for (const product of discountWindow) {
        discountMap.set(product, (discountMap.get(product) || 0) + 1);
      }

      // wantMap과 비교
      let isVaild = true;
      for (const [product, quantity] of wantMap) {
        if ((discountMap.get(product) || 0) < quantity) {
          isVaild = false;
          break;
        }
      }

      if (isVaild) {
        answer++;
      }
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
