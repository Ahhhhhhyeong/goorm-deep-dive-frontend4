import React, { useState } from 'react';
import InputComponent from './InputComponent';

export default function Question3() {
  const dateDefault = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [result, setResult] = useState(null);
  const [startMonth, setStartMonth] = useState(1);
  const [startDate, setStartDate] = useState(1);
  const [endMonth, setEndMonth] = useState(2);
  const [endDate, setEndDate] = useState(1);

  function func_a(arr) {
    //if (arr[0] === 1) return arr[1]; //없어도 상관없긴 해!
    let num = 0;
    dateDefault.forEach((date, idx) => {
      if (arr[0] - 1 > idx) {
        num += date;
      }
    });
    return num + arr[1];
  }

  const solution = () => {
    const startArr = [Number(startMonth), Number(startDate)];
    const endArr = [Number(endMonth), Number(endDate)];
    if (startArr.includes(0) || endArr.includes(0)) return;
    // if(start_month < end_month || start_month === end_month && start_date < end_date) return alert('조건에 맞지 않습니다.');

    const a = func_a(startArr);
    const b = func_a(endArr);
    console.log(a, ',', b, ':', b - a);
    setResult(b - a);
  };

  return (
    <div>
      <h2>시작 날짜와 끝 날짜의 사이 날짜 구하기</h2>
      <p>시작일자는 마지막일자보다 작아야합니다.</p>
      <InputComponent
        inputs={[
          { label: '시작달', value: startMonth, onChange: setStartMonth, id: 'startMonth' },
          { label: '시작일', value: startDate, onChange: setStartDate, id: 'startDate' },
          { label: '마지막달', value: endMonth, onChange: setEndMonth, id: 'endMonth' },
          { label: '마지막일', value: endDate, onChange: setEndDate, id: 'endDate' },
        ]}
        buttonText='확인'
        onClick={solution}
      />
      {result && <p>{result} 일</p>}
    </div>
  );
}
