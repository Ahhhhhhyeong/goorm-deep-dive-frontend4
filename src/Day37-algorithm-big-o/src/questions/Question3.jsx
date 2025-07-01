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
      <h5>별찍기!</h5>
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
