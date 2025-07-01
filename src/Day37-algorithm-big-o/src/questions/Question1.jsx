import React, { useState } from 'react';

export default function Question1() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [result, setResult] = useState('');

  const handleClick = () => {
    setResult(Number(firstNum) + Number(secondNum));
  };

  return (
    <div className='question-div'>
      <h2>문제 1번</h2>
      <h5>
        두 숫자를 더한 값을 구하려 합니다. <br />
        표준 입력으로 숫자 두 개를 입력받아, 두 수의 합을 출력하도록 코드를 작성하려 합니다. 빈칸을 채워 전체 코드를
        완성해 주세요.
      </h5>
      <div className='form-basic'>
        <input type='number' onChange={(e) => setFirstNum(e.target.value)} value={firstNum} />
        <input type='number' onChange={(e) => setSecondNum(e.target.value)} value={secondNum} />
        <button onClick={handleClick}>출력</button>
        {result}
      </div>
    </div>
  );
}
