import React from 'react';

export default function InsertionSort() {
  const test_array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

  // 값을 교체 할 때 사용할 임시 변수
  let temp;

  const insertSortFt = () => {
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
  };

  // 함수 시작(정렬시작해라!)
  insertSortFt();

  return (
    <div>
      <h3>insetSort</h3>
      <p>{JSON.stringify(test_array)}</p>
    </div>
  );
}
/*
- 삽입 정렬은 앞에서부터 차례대로 정렬된 부분에 알맞은 위치에 삽입하는 방식
- 각 숫자를 적절한 위치에 삽입하는 방식
- 삽입정렬의 장점은 꼭 필요할 때만 위치를 바꾼다.그래서 선택 정렬과 버블 정렬보다는
  조금 효율적이다
- 실무에서는 소규모 알고리즘을 작성할 때는 사용이 된다
- 정렬된 데이터에 값을 추가할 때 삽입 정렬을 주로 사용한다.
*/
