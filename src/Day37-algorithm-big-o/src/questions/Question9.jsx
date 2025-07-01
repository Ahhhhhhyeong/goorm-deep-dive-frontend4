import React, { useState } from 'react';

export default function Question9() {
  const [intStr, setIntStr] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    if (intStr === '') return setResult(null);
    let temp = '';
    for (let i = intStr.length - 1; i >= 0; i--) {
      temp += intStr[i];
    }
    setResult(temp);
  };

  return (
    <div className='question-div'>
      <h2>9번 문제</h2>
      <h5>
        숫자 한 개를 입력받았을 때 숫자를 거꾸로 출력하려고 합니다.
        <br />
        예를 들어, 12345가 입력되면 54321을 출력합니다.
        <br />
        표준 입력으로 자연수 n을 입력받아 숫자 n을 거꾸로 출력하도록 코드를 작성하려 합니다. 빈칸을 채워 전체 코드를
        완성해 주세요.
      </h5>
      <ul style={{ fontSize: '0.8rem', listStyle: 'inside' }}>
        <li>표준 입력으로 자연수 n이 주어집니다.</li>
        <li>n은 1 이상 100,000,000 이하입니다.</li>
        <li>n은 0으로 끝나지 않습니다.</li>
      </ul>
      <div className='form-basic'>
        <input
          type='text'
          placeholder='1~100,000,000 사이의 정수'
          value={intStr}
          onChange={(e) => setIntStr(e.target.value)}
        />
        <button onClick={handleClick}>출력하기</button>
      </div>
      {result}
    </div>
  );
}
