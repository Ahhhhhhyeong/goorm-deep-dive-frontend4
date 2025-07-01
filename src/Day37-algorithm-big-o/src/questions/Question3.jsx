import React, { useState } from 'react';

export default function Question3() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState([]);

  const handleClick = () => {
    const temp = [];
    const start = performance.now();
    for (let i = num; i > 0; i--) {
      let star = '';
      for (let j = 0; j < i; j++) {
        star += '*';
      }
      console.log(star);
      temp.push(star);
    }
    const end = performance.now();
    console.log('걸린시간: ', (end - start).toFixed(6));
    setResult(temp);
  };
  return (
    <div className='question-div'>
      <h2>3번 문제</h2>
      <h5>
        문자열 한 개가 주어졌을 때, 주어진 문자열 양 옆에 큰따옴표를 붙이려 합니다.
        <br />
        표준 입력으로 문자열 한 개를 입력받아, 입력받은 문자열 양 옆에 큰따옴표를 붙여 출력하도록 코드를 작성하려
        합니다. 빈 칸을 채워 전체 코드를 완성해주세요.
      </h5>
      <div className='form-basic'>
        <input type='text' onChange={(e) => setNum(e.target.value)} value={num} placeholder='숫자를 입력해주세요' />
        <button onClick={handleClick}>출력</button>
        <div style={{ textAlign: 'left' }}>
          {result &&
            result.map((v, idx) => (
              <p style={{ margin: 0 }} key={idx}>
                {v}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
