import React, { useState } from 'react';
import InputComponent from './InputComponent';

export default function Question8() {
  const [data, setData] = useState('');
  const [result, setResult] = useState(false);

  const isLowerCase = (word) => {
    return /^[a-z]+$/.test(word);
  };

  const isPeriodCheck = (word) => {
    return word === '.';
  };

  const isBlankCheck = (word) => {
    return word === ' ';
  };

  const solution = () => {
    const test = data.split('');
    // console.log(test);
    const chk = { isLower: false, isBlank: false, isPeriod: false };
    for (const c of test) {
      if (!chk['isLower']) chk['isLower'] = isLowerCase(c);
      if (!chk['isBlank']) chk['isBlank'] = isBlankCheck(c);
      if (!chk['isPeriod']) chk['isPeriod'] = isPeriodCheck(c);
    }

    if (Object.values(chk).includes(false)) {
      return setResult(false);
    }
    return setResult(true);
  };

  return (
    <div>
      <h1>팰린드롬 판단하기</h1>
      <p>소문자 알파벳, 공백, 마침표 로 이루어진 문장 체크. </p>
      <InputComponent
        inputs={[
          {
            label: '문장입력',
            value: data,
            onChange: setData,
            type: 'text',
            placeholder: '1~100자리 입력해주세요',
          },
        ]}
        buttonText='확인'
        onClick={solution}
      />
      <p>{result ? '맞음' : '아님'}</p>
    </div>
  );
}
