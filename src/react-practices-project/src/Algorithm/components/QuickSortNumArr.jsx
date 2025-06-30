import React, { useState } from 'react';

export default function QuickSortNumArr() {
  //숫자 입력값
  const [num, setNum] = useState(0);
  //숫자 배열 저장 공간
  const [numArr, setNumArr] = useState([]);

  const handleAdd = () => {
    // console.log('값 추가: ', num, ' : ', typeof num);
    const typeNum = Number(num);
    //임시배열 생성
    const copyArr = [...numArr];
    copyArr.push(typeNum);
    //정렬 시작
    const result = quickSort(copyArr);
    setNumArr(result);
    setNum('');
  };

  const quickSort = (arr) => {
    // console.log('재귀: ', arr);
    //배열에 값이 1개는 그냥 리턴
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = arr.slice(1).filter((v) => v < pivot);
    const right = arr.slice(1).filter((v) => v > pivot);

    //다시 배열 만들어서 재귀 호출 -> 정렬
    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  return (
    <div className='m-4'>
      <h1 className='m-2 text-xl font-bold'>[Quick Sort] 숫자 정렬기 만들기 (기초)</h1>
      <h3 className='m-2 text-sm text-zinc-400 '>
        📝 설명: 사용자가 입력한 숫자 배열을 Quick Sort로 내림차순 정렬하세요.
      </h3>
      <hr />
      <div className='mt-4'>
        <input className='simple-input' type='text' value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={handleAdd} className='simple-blue-button'>
          추가하기
        </button>
      </div>
      <div className='m-3'>{JSON.stringify(numArr)}</div>
    </div>
  );
}
