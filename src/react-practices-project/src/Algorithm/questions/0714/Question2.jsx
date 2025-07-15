import React, { useState } from 'react';
import InputComponent from '../../../utils/InputComponent';

export default function Question2() {
  const [n, setN] = useState(3);
  const [votes, setVotes] = useState('1,2,1,3,1,2,1');
  const [result, setResult] = useState(null);

  function solution(num, voteArr) {
    //후보자 이름을 키로하는 map을 만들어서 초기값 = 0
    //voteArr의 후보자를 map에 입력
    //제일 많은 value의 key를 리턴
  }

  const handleClick = () => {
    const num = Number(n.trim());
    const voteArr = votes
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((v) => !isNaN(v));
    if (isNaN(num) || voteArr.length <= 0) return;

    console.log(num, voteArr);
    solution(num, voteArr);
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200 my-3'>
      <h3 className='text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200'>문제8: 누가 반장이 될까요?</h3>
      <InputComponent
        inputs={[
          {
            label: '후보자 수',
            value: n,
            onChange: setN,
            type: 'number',
            id: 'test2-1',
            placeholder: '점수를 쉼표로구분해주세요.',
          },
          {
            label: '투표 결과',
            value: votes,
            onChange: setVotes,
            type: 'text',
            id: 'test2-2',
            placeholder: '점수를 쉼표로구분해주세요.',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p className='text-lg font-semibold pt-3'>결과 : {result}</p>
    </div>
  );
}
