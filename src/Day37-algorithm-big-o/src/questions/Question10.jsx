import React, { useState } from 'react';

export default function Question10() {
  const [intStr, setIntStr] = useState('');
  const [result, setResult] = useState(null);
  const handleClick = () => {
    if (intStr === '') return setResult(null);
    let cnt = 0;
    for (const s of intStr) {
      if (Number(s) === 1) cnt++;
    }
    setResult(cnt);
  };
  return (
    <div className='question-div'>
      <h2>10번 문제</h2>
      <h5>
        문자열 s에서 '1'의 개수를 구하려 합니다.
        <br />
        예를 들어 s가 "4156721"일 때, 2번째와 마지막 번째 문자가 '1'이므로 2를 출력합니다.
        <br />
        표준 입력으로 문자열 s를 입력받아 s에서 '1'의 개수를 출력해주세요.
      </h5>
      <ul style={{ fontSize: '0.8rem', listStyle: 'inside' }}>
        <li>표준 입력으로 자연수 s가 주어집니다.</li>
        <li>문자열 s의 길이는 1 이상 1,000 이하입니다.</li>
        <li>문자열 s는 '1'~'9'로 이루어진 문자열입니다.</li>
      </ul>
      <div className='form-basic'>
        <input
          type='text'
          placeholder='1~1000 사이의 정수를 입력해주세요.'
          value={intStr}
          onChange={(e) => setIntStr(e.target.value)}
        />
        <button onClick={handleClick}>출력하기</button>
      </div>
      {result}
    </div>
  );
}
