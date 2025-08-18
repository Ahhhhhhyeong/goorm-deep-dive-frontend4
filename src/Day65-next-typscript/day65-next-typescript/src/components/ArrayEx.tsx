import React from 'react';

export default function ArrayEx() {
  /** 타입스크립트 배열
   * 여러개의 데이터를 담기위해 배열 사용
   * 문자를 작성할 때 타입이 있는 언어들 중에서 문자 한 개('')와 문자 여러개("")를 표현하는 방식이 다름
   *
   */
  let fruits: string[] = ['🍎', '🍉', '🥭'];
  // console.log(fruits);

  let numbers: number[] = [1, 2, 3, 4, 5];
  // console.log(numbers);

  return (
    <div>
      <h1 className='text-2xl font-bold'>타입스크립트 배열</h1>
      <p>{JSON.stringify(fruits)}</p>
      <p>{JSON.stringify(numbers)}</p>
    </div>
  );
}
