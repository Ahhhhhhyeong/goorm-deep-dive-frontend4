import React, { useState } from 'react';
import InputComponent from '../InputComponent';

export default function AlgoCospro2() {
  const [current, setCurrent] = useState('70,100,70,80,50,95');
  const [ast, setAst] = useState('35,65,80,50,20,60');
  const [result, setResult] = useState('');

  // 1번 조건
  function func_a(cnt, arr1) {
    const top10Percent = Math.ceil(arr1.length * 0.1); //상위 10%에 해당하는 학생 수
    // 상위 10% 점수 찾기
    const sortArr = [...arr1].sort((a, b) => b - a);
    const topScore = sortArr[top10Percent - 1];

    // 상위 10%에 드는 사람(인덱스) 찾아 cnt배열에 추가
    arr1.forEach((v, i) => {
      if (v >= topScore && v >= 80) {
        cnt[i] = cnt[i] + 1;
      }
    });
    return cnt;
  }
  // 2번 조건
  function func_b(cnt, arr1) {
    let max = 0;
    let idx = 0;
    arr1.forEach((v, i) => {
      if (max < v && v >= 80) {
        max = v;
        idx = i;
      }
      if (max === v) {
        //중복수혜XX
        return cnt;
      }
    });
    cnt[idx] = cnt[idx] + 1;
    return cnt;
  }
  // 3번 조건
  function func_c(cnt, arr1, arr2) {
    /**
     * 성적이 많이오른 : 이번 - 저번 => +값으로 큰 수
     */
    const upscore = [];
    let max = 0;
    arr1.forEach((v, i) => {
      let tmp = arr1[i] - arr2[i];
      upscore[i] = tmp;
      if (tmp > max) max = tmp;
    });
    // console.log('3번 푸는중_ 임시 배열: ', upscore);
    upscore.map((v, i) => {
      if (v === max) {
        cnt[i] = cnt[i] + 1;
      }
    });
    return cnt;
  }

  const handleClick = () => {
    const current_arr = current
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((v) => !isNaN(v));
    const ast_arr = ast
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((v) => !isNaN(v));
    // 장학금 수혜 카운트
    let count = Array.from({ length: current.split(',').length }, (v) => (v = 0));
    // console.log(count);
    //1번
    count = func_a(count, current_arr);
    count = func_b(count, current_arr);
    count = func_c(count, current_arr, ast_arr);

    //count에 1이상 남은거 더하여 리턴
    let cnt = 0;
    for (let c of count) {
      if (c >= 1) cnt++;
    }
    setResult(cnt);
  };

  return (
    <div className='section'>
      <h3>2번: 장학생 수 구하기</h3>
      <div className='q-info'>
        <p>장학금 조건</p>
        <ol>
          <li>이번 학기 성적이 80점 이상(100점만점)이면서 석차가 상위 10% 이내 학생</li>
          <li>이번 학기 성적이 80점 이상(100점만점)이면서 1등인 학생</li>
          <li>직전 학기 대비 성적이 가장 많이 오른 학생(여러명일 때 해당 학생 전부)</li>
        </ol>
        <p>단, 중복수혜는 불가능 하다.</p>
      </div>
      <InputComponent
        inputs={[
          {
            label: '이번 학기성적',
            value: current,
            onChange: setCurrent,
            type: 'text',
            id: 'cospro2-1',
          },
          {
            label: '직전 학기성적',
            value: ast,
            onChange: setAst,
            type: 'text',
            id: 'cospro1-2',
          },
        ]}
        buttonText='확인'
        onClick={handleClick}
      />
      <p>장학금을 받는 학생 수: {result} 명</p>
    </div>
  );
}
