import React, { useState } from 'react';
import InputComponent from './InputComponent';

export default function Question2() {
  const gradeDefault = {
    S: 5,
    G: 10,
    V: 15,
  };
  const [price, setPrice] = useState(0);
  const [grade, setGrade] = useState('S');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const intprice = Number(price);
    if (grade === '' || intprice === 0) return;

    for (const key in gradeDefault) {
      if (key === grade) {
        const calc = Math.round(intprice * (1 - gradeDefault[key] / 100));
        // console.log(calc);
        setResult(calc.toLocaleString());
      }
    }
  };
  return (
    <div>
      <h2>쇼핑몰 등급별 할인 금액 구하기</h2>
      <p>등급 및 할인율 확인</p>
      <ul>
        {Object.entries(gradeDefault).map(([key, value], index) => (
          <li key={index}>
            {key} : {value}%
          </li>
        ))}
      </ul>
      <InputComponent
        inputs={[{ label: '가격', value: price, onChange: setPrice, id: 'price' }]}
        selects={[
          {
            label: '등급입력',
            options: [
              { label: 'Silver', value: 'S' },
              { label: 'Gold', value: 'G' },
              { label: 'VIP', value: 'V' },
            ],
            value: grade,
            onChange: setGrade,
            id: 'gradeOption',
          },
        ]}
        buttonText='확인'
        onClick={handleCheck}
      />
      {result && <p>{result} 원</p>}
    </div>
  );
}
