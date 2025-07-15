import React, { useState } from 'react';
import InputComponent from '../../utils/InputComponent';

export default function Question1() {
  const [score, setScore] = useState('35,28,98,34,20,50,85,74,71,7');
  const [result, setResult] = useState(null);

  function findMinMax(scroes) {
    return scroes.reduce(
      ([min, minIdx, max, maxIdx], num, idx) => {
        if (num < min) {
          return [num, idx, max, maxIdx];
        } else if (num > max) {
          return [min, minIdx, num, idx];
        } else {
          return [min, minIdx, max, maxIdx];
        }
      },
      [100, 0, 0, 0]
    );
  }

  function getAvg(scroes, minIdx, maxIdx) {
    return Math.floor(
      scroes.reduce((sum, num, idx) => {
        if (idx === minIdx || idx == maxIdx) {
          return sum;
        } else {
          return sum + num;
        }
      }, 0) /
        (scroes.length - 2)
    );
  }

  function solution(scores, scores_len) {
    // 최대값, 최소값
    const [min, minIdx, max, maxIdx] = findMinMax(scores);
    console.log(`maxid: ${maxIdx} minid: ${minIdx}`);
    //평균 구하기
    return getAvg(scores, minIdx, maxIdx);
  }

  const handleClick = () => {
    const scoreArr = score.split(',').map((v) => Number(v));
    if (scoreArr.length < 2) return;
    const answer = solution(scoreArr, scoreArr.length);
    setResult(answer);
  };
  return (
    <div className='section'>
      <h3>문제3 체조 선수의 점수 구해주기</h3>
      <InputComponent
        inputs={[
          {
            label: '심사위원 점수',
            value: score,
            onChange: setScore,
            type: 'text',
            id: 'test1-1',
            placeholder: '숫자를 쉼표로 연결하여 입력해주세요.',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>평균 : {result} 점</p>
    </div>
  );
}
