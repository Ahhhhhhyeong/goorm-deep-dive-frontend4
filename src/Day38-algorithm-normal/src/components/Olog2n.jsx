import React, { useState } from 'react';

/* 숫자찾기 게임(이진탐색)
  - 배열의 가운데를 기준으로 잡는다
  - 기준이 잡히면 그 기준을 중심으로 왼쪽은 기준보다 작은 값들이 있고 기준을 중심으로 오른쪽은 기준보다 큰 값들이 있다.
*/

export default function Olog2n() {
  //입력 값 저장
  const [target, setTarget] = useState(0);
  const [result, setResult] = useState('');
  const sortedNumbers = [3, 6, 9, 12, 15, 18, 21, 24, 27];

  //이진 탐색 함수
  const binarySearch = (arr, target) => {
    //중간 인덱스
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const center = Math.floor((left + right) / 2);
      if (arr[center] === target) {
        return center;
      } else if (arr[center] > target) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    }
    return -1; //못 찾는 경우
  };

  const handleSearch = () => {
    const num = parseInt(target);
    try {
      setResult(binarySearch(sortedNumbers, num));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='question-div'>
      <h2>로그 시간 복잡도</h2>

      <div className='question-div'>
        <h3>숫자찾기 게임</h3>
        <p>숫자 배열 : {JSON.stringify(sortedNumbers)}</p>
        <div className='form-basic'>
          <input type='number' value={target} onChange={(e) => setTarget(e.target.value)} />
          <button onClick={handleSearch}>찾기</button>
        </div>
        {result && <p>{result !== -1 ? `${result + 1} 번째에 존재함` : '존재하지않음'}</p>}
      </div>
    </div>
  );
}
