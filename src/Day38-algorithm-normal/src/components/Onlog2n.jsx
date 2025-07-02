import React, { useState } from 'react';

export default function Onlog2n() {
  //입력값 저장 상태
  const [inputVal, setInput] = useState('');
  //정렬된 데이터 저장
  const [sorted, setSorted] = useState(null);

  //합치기 이벤트
  const merge = (left, right) => {
    let result = [];

    let i = 0, //left index
      j = 0; //right index

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        //왼쪽값이 오른쪽 값보다 작을 때
        result.push(left[i]);
        i = i + 1; //다음 공간으로 이동
      } else {
        //오른쪽값이 왼쪽값보다 작을 때
        result.push(right[j]);
        j += 1;
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  //정렬 이벤트
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; //데이터가 1개면 정렬xx

    //middle index
    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  // 클릭 이벤트
  const handleSort = () => {
    // 문자열을 쪼개고 -> 숫자로 변형 -> 유효한 숫자만 골라 배열 생성
    const arr = inputVal
      .split(',')
      .map((num) => parseInt(num.trim()))
      .filter((n) => !isNaN(n));

    const result = mergeSort(arr);
    setSorted(result);
  };

  return (
    <div className='question-div'>
      <h2>선형 로그 시간 복잡도</h2>
      <p style={{ color: 'red', fontWeight: 'bold' }}>이부분 정리시간에 다시 코드 짜보기!!!!</p>
      <div className='question-div'>
        <h4>Merge Sort</h4>
        <p>입력 배열 (쉼표로 구분):</p>

        <div className='form-basic'>
          <input type='text' value={inputVal} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleSort}>정렬 시작</button>
        </div>
        {sorted && <p>{JSON.stringify(sorted)}</p>}
      </div>
    </div>
  );
}
