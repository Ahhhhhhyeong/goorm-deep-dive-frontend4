import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function Question7() {
  const [score, setScore] = useState('650,722,914,558,714,803,650,679,669,800');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const scores = score
      .split(',')
      .map((s) => parseInt(s.trim()))
      .filter((n) => !isNaN(n));

    let answer = 0;
    for (let s of scores) {
      if (s < 800 && s >= 650) {
        answer++;
      }
    }
    // console.log(answer);
    setResult(answer);
  };

  return (
    <div>
      <h2>영어 강의 수강자</h2>
      <div className='q-info'>
        <p>
          성적스코어는 <b>쉼표로</b> 구분해주세요.(ex. 650,722,914)
        </p>
        <p>수강대상자는 650점 이상 800점 미만의 성적을 취득한 학생들 입니다.</p>
      </div>
      <InputComponent
        inputs={[
          {
            label: '수강자점수',
            value: score,
            onChange: setScore,
            type: 'text',
            id: 'test1-1',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>수강 대상자 : {result} 명</p>
    </div>
  );
}
