import React, { useState } from 'react';

export default function QuickSort() {
  //정렬할 데이터
  const [arr, setArr] = useState([5, 2, 9, 1, 7]);
  //정렬된 데이터
  const [sorted, setSorted] = useState([]);

  //클릭을 하면 퀵소트를 실행해서 정렬
  const handleSort = () => {
    console.log('handleSort');
    const result = quickSort(arr);
    setSorted(result);
  };

  const quickSort = (arr) => {
    console.log('배열: ', arr);

    //배열에 데이터가 1개이하는 그냥 리턴
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[0];
    //피벗보다 작은 값들만 골라서 배열에 담기
    const left = arr.slice(1).filter((v) => v < pivot);
    const right = arr.slice(1).filter((v) => v > pivot);

    // 다시 배열로 만들어서 quickSort 재귀호출을 해서 정렬
    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  return (
    <div>
      <h3>퀵 정렬 </h3>
      <p>정렬 전: {JSON.stringify(arr)}</p>
      <button onClick={handleSort}>정렬하기!</button>
      <p>정렬 후: {JSON.stringify(sorted)}</p>
    </div>
  );
}
