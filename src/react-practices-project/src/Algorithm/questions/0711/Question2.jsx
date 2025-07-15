import React, { useState } from 'react';
import InputComponent from '../../utils/InputComponent';

export default function Question2() {
  const [point, setPoint] = useState(2323);
  const [result, setResult] = useState(null);

  const handlePoint = () => {
    const num = Number(point);
    if (isNaN(num)) return;
    // 1000포인트 이상일경우만 사용가능
    if (num < 1000) {
      setResult(0);
      return;
    }

    // 100포인트 단위로 사용
    const pointarr = point.toString().split('');
    for (let i = pointarr.length - 1; i > pointarr.length - 3; i--) {
      pointarr[i] = 0;
    }
    console.log(pointarr.join(''));
    setResult(pointarr.join(''));
  };
  return (
    <div className='section'>
      <h3>문제6 열심히 모은 포인트 돌려드립니다.</h3>
      <InputComponent
        inputs={[
          {
            label: '포인트',
            value: point,
            onChange: setPoint,
            type: 'number',
            id: 'test2-1',
            placeholder: '포인트를 입력해주세요',
          },
        ]}
        buttonText='포인트 조회'
        onClick={handlePoint}
      />
      <p>최대로 사용가능한 포인트: {result}</p>
    </div>
  );
}
