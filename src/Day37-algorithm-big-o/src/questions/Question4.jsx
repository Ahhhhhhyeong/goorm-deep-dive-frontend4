import React, { useState } from 'react';

export default function Question4() {
  const [inputStr, setInputStr] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    if (inputStr === '') return setResult(null);
    setResult(`"${inputStr}"`);
  };
  return (
    <div className='question-div'>
      <h2>4번 문제</h2>
      <h5>
        문자열 한 개가 주어졌을 때, 주어진 문자열 양 옆에 큰따옴표를 붙이려 합니다.
        <br />
        표준 입력으로 문자열 한 개를 입력받아, 입력받은 문자열 양 옆에 큰따옴표를 붙여 출력하도록 코드를 작성하려
        합니다. 빈 칸을 채워 전체 코드를 완성해주세요.
      </h5>
      <div className='form-basic'>
        <input
          type='text'
          onChange={(e) => setInputStr(e.target.value)}
          value={inputStr}
          placeholder='문자열을 입력해주세요'
        />
        <button onClick={handleClick}>출력</button>
        <div>{result}</div>
      </div>
    </div>
  );
}
