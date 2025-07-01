import React, { useState } from 'react';

export default function Question7() {
  const [intStr, setIntStr] = useState(0);
  const [result, setResult] = useState(null);
  const [time, setTime] = useState('');
  const handleClick = () => {
    const num = Number(intStr);
    if (isNaN(num) || num === 0) {
      setTime(null);
      setResult(null);
      return;
    }
    const temp = [];
    const start = performance.now();
    for (let i = 1; i <= num; i++) {
      console.log(i);
      temp.push(i);
    }
    setResult(temp);
    const end = performance.now();
    setTime((end - start).toFixed(6));
  };
  return (
    <div className='question-div'>
      <h2>7번 문제</h2>
      <h5>
        1부터 n까지의 숫자를 출력하려고 합니다.
        <br />
        표준 입력으로 자연수 n을 받아 1부터 n까지의 정수를 출력하는 코드를 작성하려 합니다. 빈칸을 채워 전체 코드를
        완성해 주세요.
      </h5>
      <ul style={{ fontSize: '0.8rem', listStyle: 'inside' }}>
        <li>표준 입력으로 자연수 n이 주어집니다.</li>
        <li>n은 1 이상 1,000 이하입니다.</li>
      </ul>
      <div className='form-basic'>
        <input
          type='text'
          placeholder='1~1000 사이의 정수를 입력해주세요.'
          value={intStr}
          onChange={(e) => setIntStr(e.target.value)}
        />
        <div>
          <button onClick={handleClick}>출력하기</button>
          <button
            onClick={() => {
              setResult(null);
              setTime(null);
              setIntStr(0);
            }}>
            리셋
          </button>
        </div>
        {time && <p>걸린 시간 : {time} 초</p>}
      </div>
      {result && result.map((v, idx) => <p key={idx}>{v}</p>)}
    </div>
  );
}
