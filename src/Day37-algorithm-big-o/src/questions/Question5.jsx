import React, { useState } from 'react';

export default function Question5() {
  const [intStr, setIntStr] = useState('');
  const [result, setResult] = useState(null);
  const handleClick = () => {
    const num = Number(intStr);
    if (isNaN(num)) return setResult(null);
    setResult(Math.abs(num));
  };
  return (
    <div className='question-div'>
      <h2>5번 문제</h2>
      <h5>
        숫자 한 개가 주어졌을 때 그 숫자의 절댓값을 구하려 합니다.
        <br />
        표준 입력으로 숫자 한 개를 입력받아, 그 수의 절댓값을 출력해주세요.
      </h5>
      <div className='form-basic'>
        <input
          type='text'
          placeholder='-1000~1000 사이의 정수를 입력해주세요.'
          value={intStr}
          onChange={(e) => setIntStr(e.target.value)}
        />
        <button onClick={handleClick}>출력하기</button>
      </div>
      {result}
    </div>
  );
}
