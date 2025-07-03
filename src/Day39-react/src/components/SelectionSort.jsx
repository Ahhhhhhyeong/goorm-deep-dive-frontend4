import React from 'react';

export default function SelectionSort() {
  // 전체를 다 보면서 가장 작은 숫자 맨 앞으로 ->
  const arr = [5, 2, 4, 10, 8, 1, 3, 6];

  // 선택정렬
  const selectSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      // 위에서 가장 작은 공간의 번호를 가지고 와서 현재 i랑 위치를 교환한다.
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
  };

  return (
    <div>
      <h3>선택정렬</h3>
      <p>정렬 전 : {JSON.stringify(arr, null, 2)}</p>
      <p>정렬 후 : {JSON.stringify(selectSort(arr), null, 2)}</p>
    </div>
  );
}
