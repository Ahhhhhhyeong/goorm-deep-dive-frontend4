import React, { useState } from 'react';

export default function Recursive() {
  /** 간단한 재귀 함수 */
  function show(cnt) {
    console.log('show 함수 시작!', cnt);
    //종료 조건
    if (cnt >= 5) {
      console.log('종료 조건 달성');
      return; // 함수 종료
    }
    show(cnt + 1);
    console.log('show 함수 종료!');
  }

  const [total, setTotal] = useState(1);
  /**
   * 팩토리얼 함수: 1부터 n번째 까지의 곱
   * @param {*} fac : 팩토리얼: 몇 번째까지 곱할건지
   * @param {*} result : 곱해지는 값
   * @returns
   */
  function factorial(fac, result = 1) {
    console.log('호출됨');
    if (fac === 1) return;
    console.log(`${result} * ${fac} = ${result * fac}`);
    result = result * fac;
    setTotal(result);
    return fac * factorial(fac - 1, result);
  }

  return (
    <div>
      <h1>재귀 </h1>
      <button onClick={() => show(0)}>재귀함수호출</button>
      <hr />
      <h3>팩토리얼 합 = {total}</h3>
      <button onClick={() => factorial(5)}>팩토리얼 계산</button>
    </div>
  );
}
