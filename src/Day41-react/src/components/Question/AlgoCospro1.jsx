import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function AlgoCospro1() {
  const [score, setScore] = useState('20,60,98,59');
  const [n, setN] = useState(3);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const scores = score
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((s) => !isNaN(s));
    const student = Number(n);
    if (isNaN(student)) return;

    let student_scroe = scores[student]; // n의 점수
    setResult(scores.sort((a, b) => b - a).findIndex((v, idx) => v === student_scroe) + 1);
  };
  return (
    <div className='section'>
      <h3>1번 : 학생의 등수 구하기</h3>
      <div className='q-info'>
        <p>동점자는 없습니다.</p>
        <p>몇 번째 학생인지는 0이상 (수학점수 길이 - 1)이하의 정수 입니다.</p>
      </div>
      <InputComponent
        inputs={[
          {
            label: '수학점수',
            value: score,
            onChange: setScore,
            type: 'text',
            id: 'cospro1-1',
          },
          {
            label: '몇 번째 학생',
            value: n,
            onChange: setN,
            type: 'number',
            id: 'cospro1-2',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />

      {result && <p>{result}등</p>}
    </div>
  );
}
