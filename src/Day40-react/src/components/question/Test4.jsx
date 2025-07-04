import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function Test4() {
  const [arr, setArr] = useState('');
  const [result, setResult] = useState(null);

  //배열 등장 횟수 구하기
  function func_a(newArr) {
    const newObj = {};
    for (let num of newArr) {
      newObj[num] = (newObj[num] || 0) + 1;
    }
    return newObj;
  }
  //가장 많이 등장하는 수, 가장 적게 등장하는 수 찾기
  function func_b(newObj) {
    // min,max 횟수 저장
    let max = 0,
      min = 1000;
    // min, max key값 저장
    let minK = 0,
      maxK = 0;

    for (const key in newObj) {
      const value = newObj[key];
      if (min > value) {
        min = value;
        minK = key;
      } else if (max < value) {
        max = value;
        maxK = key;
      }
    }
    return { min, max, minK, maxK };
  }

  const solution = () => {
    const copyArr = arr.split(',').filter((v) => v !== '');
    if (copyArr.length === 0) return;

    // 1. 배열에 들어있는 각 자연수의 개수 세기
    const obj = func_a(copyArr);
    // console.log('각 자연수의 개수 오브젝트: ', obj);

    // 2. 가장많이 등장하는 수의 개수, 가장 적게 등장하는 수 구하기
    const { min, max, minK, maxK } = func_b(obj);

    // 3. 맥스값이 min값보다 몇 배 더 많은지
    const r = Math.floor(max / min);
    setResult(`${minK} 이/가 가장 적게 등장: ${min}번, ${maxK} 이/가 가장 많이 등장: ${max}번, 약 ${r}배 차이남`);
  };

  return (
    <div className='section'>
      <h2>등장하는 가장 많은 수와 적은 수 구하기</h2>
      <p>배열길이에 맞추어 배열 값은 쉼표로 구분하여 입력해주세요.</p>
      <InputComponent
        inputs={[
          {
            label: '배열입력',
            value: arr,
            onChange: setArr,
            type: 'text',
            id: 'inputArr',
            placeholder: '쉼표로 숫자를 구분해주세요',
          },
        ]}
        buttonText='확인'
        onClick={solution}
      />
      {result && <p>{result}</p>}
    </div>
  );
}
