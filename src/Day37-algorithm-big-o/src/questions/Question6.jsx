import React, { useState } from 'react';

export default function Question6() {
  const [intStrA, setIntStrA] = useState(0);
  const [intStrB, setIntStrB] = useState(0);
  const [result, setResult] = useState(null);
  const handleClick = () => {
    const a = Number(intStrA);
    const b = Number(intStrB);
    if (isNaN(a) || isNaN(b)) return setResult(null);
    a === b ? setResult(a + b) : setResult(b - a);
  };
  return (
    <div className='question-div'>
      <h2>6번 문제</h2>
      <h5>
        두 숫자가 같으면 두 숫자의 합을, 다르면 차를 구하려 합니다.
        <br />
        표준 입력으로 숫자 두 개를 입력받아 두 숫자가 같으면 두 숫자의 합을, 다르면 차를 출력해주세요.
      </h5>
      <ul style={{ fontSize: '0.8rem', listStyle: 'inside' }}>
        <li>두 숫자는 1 이상 100 이하인 자연수입니다.</li>
        <li>두번째 숫자는 첫번째 숫자와 같거나 큽니다.</li>
      </ul>
      <div className='form-basic'>
        <input type='number' value={intStrA} onChange={(e) => setIntStrA(e.target.value)} />
        <input type='number' value={intStrB} onChange={(e) => setIntStrB(e.target.value)} />
        <button onClick={handleClick}>출력하기</button>
      </div>
      {result}
    </div>
  );
}
