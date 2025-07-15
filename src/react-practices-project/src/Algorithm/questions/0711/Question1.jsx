import React, { useState } from 'react';
import InputComponent from '../../utils/InputComponent';

export default function Question1() {
  const [calorie, setCalorie] = useState('713,665,873,500,751');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const arr = calorie
      .split(',')
      .map((s) => s.trim())
      .filter((v) => !isNaN(Number(v)));
    if (arr.length === 0) return;
    // console.log(arr);
    let count = 0;
    const len = arr.length;
    for (let i = len - 1; i > 1; i--) {
      let a = arr[i]; //오늘
      let b = arr[i - 1]; //어제
      if (a > b) {
        count += a - b;
      }
    }
    setResult(count);
  };

  return (
    <div className='section'>
      <h3>문제5 A씨의 추가 운동 여부 알려주기</h3>
      <InputComponent
        inputs={[
          {
            label: '식단표',
            value: calorie,
            onChange: setCalorie,
            type: 'text',
            id: 'test1-1',
            placeholder: '열량을 쉼표로구분해주세요.',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>{result && JSON.stringify(result)}</p>
    </div>
  );
}
