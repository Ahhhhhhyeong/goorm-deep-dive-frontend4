import React, { useState } from 'react';
import InputComponent from './InputComponent';

export default function Question10() {
  const [data, setData] = useState('');
  const [len, setLen] = useState(10);
  const [result, setResult] = useState(null);

  const solution = () => {
    const arr = data.split(',').filter((v) => v !== '' && !isNaN(Number(v)));
    const data_len = Number(len);
    if (isNaN(data_len) || arr.length != data_len) return;

    //평균을 구하기위한 변수
    const sum = arr.reduce((calc, num) => Number(calc) + Number(num), 0);
    const avg = sum / arr.length;
    console.log(`합: ${sum} / 평균: ${avg}`);

    //평균보다 작은 수 개수 구하기
    let cnt = 0;
    for (const num of arr) {
      Number(num) < avg ? cnt++ : cnt;
    }
    console.log(`평균보다 작은 수 개수: ${cnt}`);
    setResult(cnt);
  };
  return (
    <div>
      <h1>평균 이하의 개수 구하기</h1>
      <p>10이상 100이하의 길이의 배열안에 1~1000이하의 자연수가 들어있어야 합니다.</p>
      <InputComponent
        inputs={[
          {
            label: '길이입력',
            value: len,
            onChange: setLen,
            type: 'number',
          },
          {
            label: '배열입력',
            value: data,
            onChange: setData,
            type: 'text',
            placeholder: '쉼표로 숫자를 구분해주세요',
          },
        ]}
        buttonText='확인'
        onClick={solution}
      />
      {result && <p>평균이하 수 개수 : {result} 개</p>}
    </div>
  );
}
