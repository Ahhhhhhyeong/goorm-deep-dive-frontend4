import React, { useState } from 'react';

export default function Question2() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    const firstLen = first.length;
    const secondLen = second.length;
    if (firstLen === secondLen) {
      setResult('길이가 같습니다. 길이가 다르게 다시 입력해주세요.');
      return;
    }
    firstLen > secondLen ? setResult(first) : setResult(second);
  };

  return (
    <div className='question-div'>
      <h2>문제 2번</h2>
      <h5>
        두 문자열 중 더 긴 문자열을 찾고자 합니다.
        <br />
        표준 입력으로 문자열 두 개를 입력받아, 두 문자열 중 더 긴 문자열을 출력해주세요.
      </h5>
      <div className='form-basic'>
        <input
          type='text'
          onChange={(e) => setFirst(e.target.value)}
          value={first}
          placeholder='문자열을 입력해주세요'
        />
        <input
          type='text'
          onChange={(e) => setSecond(e.target.value)}
          value={second}
          placeholder='문자열을 입력해주세요'
        />
        <button onClick={handleClick}>출력</button>
        {result}
      </div>
    </div>
  );
}
