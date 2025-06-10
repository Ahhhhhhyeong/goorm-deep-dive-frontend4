import React, { useState } from 'react';

export default function Counter() {
  /** const [현재값, 값바꾸는 함수]
   * count : 현재 값 (변수)
   * setCount : 상태를 바꾸는 함수
   * useState : 0으로 시작하는 기억 저장소를 만들어달라 요청
   */
  const [count, setCount] = useState(0);
  //문자를 변경하고 유지할 때 사용하는 방법
  const [name, setName] = useState('Kim');

  //클릭이 되었을 때 실행하는 함수로 사용
  function click() {
    setCount(count + 1); //상태변경 -> 리렌더링 -> 초기화되지않음
    setName('Hong');
    console.log(count);
  }

  return (
    <div>
      <p>클릭 수 : {count}</p>
      <p>이름 : {name}</p>
      <button onClick={click}>+1</button>
    </div>
  );
}
