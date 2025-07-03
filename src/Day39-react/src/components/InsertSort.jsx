import React from 'react';

export default function InsertionSort() {
  const test_array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

  // 값을 교체 할 때 사용할 임시 변수
  let temp;

  const insertSortFt = (arr) => {
    for (let i = 0; i < test_array.length; i++) {
      let j = i;

      while (test_array[j] > test_array[j + 1]) {
        console.error(`j: ${j}  j +1 :${j + 1}`);

        temp = test_array[j];
        test_array[j] = test_array[j + 1];
        test_array[j + 1] = temp;
        j--;
      }
    }
    return arr;
  };

  return (
    <div>
      <h3>삽입 정렬(Insert Sort)</h3>
      <p>정렬 전 : {JSON.stringify(test_array, null, 2)}</p>
      <p>정렬 후 : {JSON.stringify(insertSortFt(test_array), null, 2)}</p>
    </div>
  );
}
