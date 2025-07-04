import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function Test6() {
  const [number, setNumber] = useState(10);
  const [result, setResult] = useState(null);
  /**
   * number 입력 (10이상 1000이하)
   * 손뼉치는 횟수를 기록하는 변수(let handClap) 생성
   * 1~n까지 반복문 작성
   * 반복되는 i값을 string 변환 -> 3,6,9 가 포함되어있는지 확인
   * 포함되어있는경우 -> 3,6,9 가 몇 개 포함되어있는지 확인 -> 개수만큼 handClap에 추가
   * 리턴 = handClap값
   */
  const solution = () => {
    if (Number(number) < 10) return setResult('10보다 큰 값을 입력해주세요.');

    let handClap = 0;
    for (let i = 1; i <= Number(number); i++) {
      handClap += checkInclude(i.toString());
    }
    console.log(handClap);
    setResult(handClap);
  };

  const checkInclude = (str) => {
    let sum = 0;
    if (str.includes('3')) {
      sum += str.match(/3/g).length;
    }
    if (str.includes('6')) {
      sum += str.match(/6/g).length;
    }
    if (str.includes('9')) {
      sum += str.match(/9/g).length;
    }
    return sum;
  };

  return (
    <div className='section'>
      <h2>👏 369 게임 박수 갯수 구하기!</h2>
      <p>10이상 1000이하로 입력해주세요</p>
      <InputComponent
        inputs={[
          {
            label: '참여인원',
            value: number,
            onChange: setNumber,
            type: 'number',
            id: 'test6',
          },
        ]}
        buttonText='확인'
        onClick={solution}
      />
      <p>{result}</p>
    </div>
  );
}
