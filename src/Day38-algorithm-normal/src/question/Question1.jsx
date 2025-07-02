import React, { use, useState } from 'react';

const hints = ['apple', 'banana', 'carrot', 'grape', 'melon', 'orange', 'peach'];
/*
js 
알파벳이 아스키코드로 자동 변환하여 비교할 때 아스키코드로 비교
한글 = 아스키코드표에 없음 -> 유니코드 값으로 자동 변환 해줌
 * 아스키코드 = 1byte
 * 유니코드 = 2byte
*/

export default function Question1() {
  const [inputStr, setInputStr] = useState('');
  const [result, setResult] = useState('');

  const binarySearch = (value, left, right) => {
    //왼쪽인덱스가 오른쪽인덱스보다 크면 값이 없는걸로 종료하기
    if (left > right) return false;
    //가운데 인덱스
    const mid = Math.floor((left + right) / 2);

    //mid의 값과 value가 동일하면 성공
    if (hints[mid] == value) return true;
    else if (hints[mid] > value) {
      //입력값이 mid의 값보다 작음 (ex. mid: carrot / value: banana)
      return binarySearch(value, left, mid - 1);
    } else {
      return binarySearch(value, mid + 1, right);
    }
  };

  //찾기 버튼 클릭 이벤트
  const handleFind = () => {
    const value = inputStr.trim();
    if (value === '') return setResult('입력이 안되었음');

    const tmp = binarySearch(value, 0, hints.length - 1);
    // console.log('검색완료: ', tmp);
    setResult(tmp ? '힌트 발견!' : '힌트 없음!');
  };

  return (
    <div className='question-div'>
      <h2>실습문제 1: 🧭 비밀번호 힌트 찾기 (O(log n))</h2>
      <p className='info-p'>
        정렬된 문자열 배열이 주어졌을 때, 사용자가 입력한 힌트 문자열이 있는지 이진 탐색으로 찾아보세요.
      </p>
      <p className='info-hint'> 배열: {JSON.stringify(hints, null, 2)} </p>
      <div className='form-basic'>
        <input
          type='text'
          placeholder='문자열을 입력해주세요'
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <button onClick={handleFind}>찾기</button>
      </div>
      <p className='answer'>{result}</p>
    </div>
  );
}
