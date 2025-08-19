import React from 'react';

export default function functionEx() {
  /** 함수란?
   * 입력을 넣으면 결과가 도출됨
   */

  // 더하기 함수
  function add(a: number, b: number): number {
    return a + b;
  }

  // 인사 출력 함수
  function greet(name?: string): string {
    return `Hello! ${name ?? 'Guest'}`;
  }

  const result = add(10, 5);
  const helloResult = greet('Shami');
  return (
    <div>
      <h3 className='text-xl font-bold'>함수란?</h3>
      <h4 className='text-lg font-bold'>1. 함수 예제 : 더하기 함수</h4>
      <p>10 + 5 = {result}</p>

      <p>함수 = 입력 &gt; 처리 &gt; 출력구조를 가진 코드 블록</p>

      <h4 className='text-lg font-bold'>2. 함수 예제 : 인사 함수</h4>
      <p>{helloResult}</p>
    </div>
  );
}
