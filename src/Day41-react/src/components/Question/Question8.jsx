import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function Question8() {
  const [str, setStr] = useState('never odd or even.');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    /*
    1. str => 공백, 마침표 제거 => char arr 변환 
    2. copy를 만들어서 char arr를 reverse와 비교
    */
    const strArr = str.split('').filter((c) => c !== ' ' && c !== '.');
    const reverse = [...strArr].reverse().join('');
    console.log(strArr.join('') === reverse);
    setResult(strArr.join('') === reverse);
  };

  return (
    <div>
      <h2>팰린드롬 판단하기</h2>
      <InputComponent
        inputs={[
          {
            label: '문장입력',
            value: str,
            onChange: setStr,
            type: 'text',
            id: 'test2-1',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      {result !== null && <p>결과: {result ? '✅ Palindrome입니다!' : '❌ Palindrome이 아닙니다.'}</p>}
    </div>
  );
}
