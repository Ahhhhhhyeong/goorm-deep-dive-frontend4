import React, { useEffect, useState } from 'react';

export default function Question3() {
  //랜덤단어들 저장
  const [fullArr, setArr] = useState([]);
  //입력단어 상태 관리
  const [inputStr, setInputStr] = useState('');
  //결과값 상태 관리
  const [result, setResult] = useState({
    lineSearch: '',
    binarySearch: '',
  });

  useEffect(() => {
    console.log('생성중');
    //랜덤단어 1개 생성
    const createRandomWord = (length) => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let word = '';
      for (let i = 0; i < length; i++) {
        word += letters[Math.floor(Math.random() * letters.length)];
      }
      return word;
    };
    //랜덤 단어 10,000개 배열 생성
    // Array 메서드 중 from() = 새로운 배열 생성. 숫자 시퀀스를 넣어서 해당 숫자길이만큼의 배열을 만들 수 있음
    const wordArray = Array.from({ length: 10000 }, () => createRandomWord(5));
    console.log('생성한 배열길이: ', wordArray.length, '생성한 배열: ', wordArray);
    setArr(wordArray);
  }, []);

  //선형탐색
  const lineSearch = (value) => {
    for (const word of fullArr) {
      if (value === word) return '값 있음!';
    }
    return '값 없음ㅠ';
  };

  //이진탐색
  const binarySearch = (value, arr, left, right) => {
    if (left > right) return '값 없음ㅠ';

    const mid = Math.floor((left + right) / 2);
    if (value === arr[mid]) return '값 있음!';
    else if (arr[mid] > value) return binarySearch(value, arr, left, mid - 1);
    else return binarySearch(value, arr, mid + 1, right);
  };

  //이진탐색을 위한 정렬부분 합치기
  const merge = (left, right) => {
    let newArr = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[i]) {
        newArr.push(left[i]);
        i += 1;
      } else {
        newArr.push(right[i]);
        j += 1;
      }
    }
    return newArr.concat(left.slice(i)).concat(right.slice(j));
  };

  //이진탐색을 위한 정렬
  const binarySort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = binarySort(arr.slice(0, mid));
    const right = binarySort(arr.slice(mid));

    return merge(left, right);
  };

  //버튼 클릭 이벤트
  const handleSearch = (type) => {
    const value = inputStr.trim();
    if (value.length != 5) return alert('5자리 문자열을 입력해주세요.');

    switch (type) {
      case 'LINE': {
        console.time('liner');
        const search = lineSearch(value);
        console.timeEnd('liner');
        return setResult((prev) => ({
          ...prev,
          lineSearch: search,
        }));
      }
      case 'BINARY': {
        console.time('binary');
        try {
          const newArr = Array.from(fullArr.sort());
          // const newArr = binarySort(fullArr);
          const search = binarySearch(value, newArr, 0, newArr.length - 1);
          return setResult((prev) => ({
            ...prev,
            binarySearch: search,
          }));
        } catch (err) {
          console.error(err);
          return;
        } finally {
          console.timeEnd('binary');
        }
      }
    }
  };

  return (
    <div className='question-div'>
      <h2>실습문제 3: 🔍 검색어 추천 기능 비교 실험</h2>
      <pre className='info-p'>
        {`10,000개의 랜덤 단어가 있는 배열이 있을 때: 
선형 탐색(O(n))으로 검색어 "code" 포함 여부를 찾고 
이진탐색(O(logn))을 위해 정렬 후 찾아본다. 
각 탐색 방법의 실행 속도를 console.time()으로 비교하세요.`}
      </pre>
      <p className='info-hint'>랜덤으로 생성된 문자열이라 a~z의 문자를 아무렇게나 5자리로 생성했습니다.</p>
      <div className='form-basic'>
        <input
          type='text'
          placeholder='5자리의 문자열을 입력해주세요.'
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <button onClick={() => handleSearch('LINE')}>선형탐색 시작!</button>
        {result.lineSearch && <p style={{ color: 'red', fontSize: '0.9rem' }}>{result.lineSearch}</p>}
        <button onClick={() => handleSearch('BINARY')}>이진탐색 시작!</button>
        {result.binarySearch && <p style={{ color: 'red', fontSize: '0.9rem' }}>{result.binarySearch}</p>}
      </div>
    </div>
  );
}
