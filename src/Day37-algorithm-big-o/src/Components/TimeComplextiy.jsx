import React, { useState } from 'react';

export default function TimeComplextiy() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [result, setResult] = useState(null);
  const [time, setTime] = useState(null);
  const handleSum = () => {
    const numA = Number(firstNum);
    const numB = Number(secondNum);
    //걸린시간계산(시작시간, 종료시간)
    const start = performance.now();
    const sum = numA + numB;
    const end = performance.now();

    console.log('start: ', start);
    console.log('end: ', end);
    setResult(sum);
    setTime((end - start).toFixed(6)); //6자리 ms
  };
  return (
    <div>
      <h1>시간복잡도 O(1)</h1>
      <div className='form-basic'>
        <input type='number' onChange={(e) => setFirstNum(e.target.value)} value={firstNum} />
        <input type='number' onChange={(e) => setSecondNum(e.target.value)} value={secondNum} />
        <button onClick={handleSum}>합 구하기</button>
        {result && (
          <p>
            결과: {result} (⏰ {time} ms)
          </p>
        )}
      </div>
    </div>
  );
}
