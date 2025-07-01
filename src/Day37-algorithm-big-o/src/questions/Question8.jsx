import React, { useState } from 'react';

export default function Question8() {
  const [intStr, setIntStr] = useState(0);
  const [arrStr, setArrStr] = useState('');
  const [result, setResult] = useState(null);

  const reset = () => {
    setIntStr(0);
    setArrStr('');
  };

  const handleClick = () => {
    const num = Number(intStr);
    const arr = arrStr.split(' ');

    if (isNaN(num) || num > 50 || num < 2 || arr.length !== num) {
      reset();
      setResult(null);
      return;
    }
    const tmp = [];
    for (let i = 1; i < arr.length; i++) {
      let a = Number(arr[i - 1]);
      let b = Number(arr[i]);
      tmp.push(a - b);
    }
    setResult(tmp);
    reset();
  };
  return (
    <div className='question-div'>
      <h2>8번 문제</h2>
      <h5>
        길이가 n인 배열 arr에서 인접하는 두 숫자 중 첫 번째 숫자에서 두 번째 숫자를 뺀 값을 모두 출력하려 합니다.
        <br />
        표준 입력으로 자연수 n과 배열 arr을 입력받아, 인접하는 두 숫자 중 첫 번째 숫자에서 두 번째 숫자를 뺀 값을
        차례대로 출 력하는 코드를 작성하려 합니다. 빈칸을 채워 전체 코드를 완성해주세요.
      </h5>
      <ul style={{ fontSize: '0.8rem', listStyle: 'inside' }}>
        <li>n은 2 이상 50 이하입니다.</li>
        <li>arr의 원소는 -100 이상 100 이하인 정수입니다.</li>
      </ul>
      <div className='form-basic'>
        <input type='number' value={intStr} onChange={(e) => setIntStr(e.target.value)} />
        <input type='text' placeholder='예시: 1 3 6 2' value={arrStr} onChange={(e) => setArrStr(e.target.value)} />
        <button onClick={handleClick}>출력하기</button>
      </div>
      {result && result.map((v, idx) => <p key={idx}>{v}</p>)}
    </div>
  );
}
