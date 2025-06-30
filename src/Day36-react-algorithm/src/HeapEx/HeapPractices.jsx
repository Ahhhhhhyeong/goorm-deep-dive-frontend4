import React, { useState } from 'react';

export default function HeapPractices() {
  const [heapArr, setHeapArr] = useState([]);
  const [inputNum, setInputNum] = useState(0);

  const insertValue = (arr) => {
    console.log('Heap Insert');
    //마지막 요소의 인덱스
    let i = arr.length - 1;
    while (i > 0) {
      //부모요소 인덱스
      const parent = Math.floor((i - 1) / 2);
      console.log('paraent: ', parent);
      if (arr[parent] > arr[i]) {
        [arr[parent], arr[i]] = [arr[i], arr[parent]];
        i = parent;
      } else break;
    }
    return arr;
  };

  const removeValue = (arr) => {
    let i = 0;
    const length = arr.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let small = i;

      if (left < length && arr[left] < arr[small]) {
        small = left;
      }
      if (right < length && arr[right] < arr[right]) {
        small = right;
      }

      if (small === i) break;

      [arr[i], arr[small]] = [arr[small], arr[i]];
      i = small;
    }
    return arr;
  };

  const handleAdd = () => {
    const val = Number(inputNum);
    if (isNaN(val)) return;

    const newHeap = insertValue([...heapArr, val]);
    setHeapArr(newHeap);
    console.log(newHeap);
    setInputNum('');
  };
  const handleDel = () => {
    if (heapArr.length === 0) return;

    const newHeap = [...heapArr];
    const min = newHeap[0];
    newHeap[0] = newHeap.pop();
    console.log(newHeap);
    setHeapArr(removeValue(newHeap)); //정렬하기
    console.log('꺼낸값: ', min);
  };

  return (
    <div>
      <h3>heap 연습</h3>
      <input type='text' onChange={(e) => setInputNum(e.target.value)} value={inputNum} />
      <button onClick={handleAdd}>추가하기</button>
      <button onClick={handleDel}>제일 작은 수부터 삭제하기</button>

      <h4>heap 배열</h4>
      <p>{JSON.stringify(heapArr)}</p>
    </div>
  );
}
