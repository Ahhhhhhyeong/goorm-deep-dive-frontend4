import React, { useState } from 'react';
import InputComponent from '../../utils/InputComponent';

export default function Question1() {
  const [schdules, setSchdules] = useState('OXXOOOXOXX');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const schduleArr = schdules
      .split('')
      .map((s) => s.trim())
      .filter((v) => (v !== '' && v === 'O') || v === 'X');
    if (schduleArr.length === 0) return;
    // console.log(schduleArr);

    // X의 인덱스 + 1 추출
    const students = [];
    schduleArr.forEach((date, idx) => {
      if (date === 'X') students.push(idx + 1);
    });
    setResult(students);
  };

  return (
    <div className='section'>
      <h3>문제1 상담선생님은 너무 바빠요~</h3>
      <InputComponent
        inputs={[
          {
            label: '일정',
            value: schdules,
            onChange: setSchdules,
            type: 'text',
            id: 'test1-1',
            placeholder: 'O와 X를 붙여서 입력해주세요.',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>{result && JSON.stringify(result)}</p>
    </div>
  );
}
