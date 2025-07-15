import React, { useState } from 'react';
import InputComponent from '../../../utils/InputComponent';

export default function Question1() {
  const [midScore, setMidScore] = useState('20,50,40,60,80');
  const [finalScore, setFinalScore] = useState('10,50,70,61,79');
  const [result, setResult] = useState(null);

  function solution(mid_scores, final_scores) {
    let minscore = 999,
      maxscore = 0;
    mid_scores.forEach((scores, idx) => {
      const cha = final_scores[idx] - scores;
      console.log(`${final_scores[idx]} - ${scores} = ${cha}`);
      if (minscore > cha && scores > final_scores[idx]) minscore = cha;
      if (maxscore < cha && scores < final_scores[idx]) maxscore = cha;
    });
    if (minscore === 999) minscore = 0; //만약 점수가 떨어지지 않은 경우 0으로
    setResult([maxscore, minscore]);
  }

  const handleClick = () => {
    const midArr = midScore
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((v) => !isNaN(v));
    const finalArr = finalScore
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((v) => !isNaN(v));
    if ((midArr.length > 50 && midArr.length < 4) || (finalArr.length > 50 && finalArr.length < 4)) return;

    console.log(midArr, finalArr);
    solution(midArr, finalArr);
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
      <h3 className='text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200'>
        문제7: 오른 점수와 떨어진 점수 구하기
      </h3>
      <InputComponent
        inputs={[
          {
            label: '중간시험 점수',
            value: midScore,
            onChange: setMidScore,
            type: 'text',
            id: 'test1-1',
            placeholder: '점수를 쉼표로구분해주세요.',
          },
          {
            label: '기말시험 점수',
            value: finalScore,
            onChange: setFinalScore,
            type: 'text',
            id: 'test1-2',
            placeholder: '점수를 쉼표로구분해주세요.',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p className='text-lg font-semibold pt-3'>결과 : {JSON.stringify(result, null, 2)}</p>
    </div>
  );
}
