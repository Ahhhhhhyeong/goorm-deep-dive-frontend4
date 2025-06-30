import React, { useState } from 'react';

export default function StringLengSort() {
  const [stringInput, setStringInput] = useState('');
  const [arrSort, setArrSort] = useState([]);

  const addString = () => {
    if (stringInput.trim() === '') return;
    const copyArr = [...arrSort];
    copyArr.push(stringInput);
    //정렬하고 정렬배열에 넣기
    setArrSort(sortArr(copyArr));
    //리셋
    setStringInput('');
  };

  const sortArr = (arr) => {
    if (arr.length <= 1) return arr;
    //1. 글자수로 우선 정렬
    // 글자수 : 해당 length 글자들([])
    const lengthMap = new Map();
    for (const word of arr) {
      if (!lengthMap.has(word.length)) {
        lengthMap.set(word.length, []);
      }
      lengthMap.get(word.length).push(word);
    }

    // 2. Map의 key 값들을 정렬
    const sortedLengths = [];
    for (const length of lengthMap.keys()) {
      let inserted = false;
      for (let i = 0; i < sortedLengths.length; i++) {
        if (length < sortedLengths[i]) {
          sortedLengths.splice(i, 0, length);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        sortedLengths.push(length);
      }
    }

    //3. 각 key값의 value 정렬
    const sorted = [];
    for (const key of sortedLengths) {
      const words = lengthMap.get(key);
      const sortedWords = quickSort(words);
      sorted.push(...sortedWords);
    }
    return sorted;
  };

  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  return (
    <div className='m-4'>
      <h1 className='m-2 text-xl font-bold'>[Quick Sort] 문자열 길이로 정렬하기</h1>
      <h3 className='m-2 text-sm text-zinc-400 '>
        📝 설명: 문자열 배열을 받아서 글자 길이 기준으로 오름차순 정렬하세요.
      </h3>
      <hr />
      <div className='mt-4'>
        <input
          className='simple-input'
          type='text'
          onChange={(e) => setStringInput(e.target.value)}
          value={stringInput}
        />
        <button className='simple-blue-button' onClick={addString}>
          추가하기
        </button>
        <p>{JSON.stringify(arrSort)}</p>
      </div>
    </div>
  );
}
