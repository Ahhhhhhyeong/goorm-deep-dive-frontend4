import React from 'react';

export default function SelectionSort() {
  // 전체를 다 보면서 가장 작은 숫자 맨 앞으로 ->
  const arr = [5, 2, 4, 10, 8, 1, 3, 6];

  // 선택정렬
  const selectSort = () => {
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
  };

  return (
    <div>
      <h3>선택정렬</h3>
      {JSON.stringify(arr, null, 2)}
    </div>
  );
}
/*
 선택 정렬 
  - 가장 작은 데이터를 선택해서 앞쪽으로 차례 차례 정렬하는 방식
  - 배열을 처음부터 끝까지 돌면서 가장 작은 값을 찾아 현재 위치와 교환한다
  - 시간복잡도 O(n^2), 공간 복잡도는 O(1)로 비교적 간단 하지만 느리다
  - 선택정렬은 실무에서 잘 안쓰긴 하지만 면접에서 자주 나온다
  
*/
