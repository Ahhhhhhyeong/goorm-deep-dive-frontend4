import React, { useState } from 'react';

export default function MinHeap() {
  //숫자 입력값
  const [num, setNum] = useState(0);
  //힙 배열
  const [heapArr, setHeapArr] = useState([]);
  //팝 되었을 때 값
  const [popResult, setResult] = useState('');

  //힙에 저장+정렬
  const heapUp = (arr, idx) => {
    // console.log('arr: ', arr, ' idx: ', idx);
    if (idx === 0) return;
    //부모요소 찾기
    const parentIdx = Math.floor((idx - 1) / 2);
    if (arr[parentIdx] > arr[idx]) {
      [arr[parentIdx], arr[idx]] = [arr[idx], arr[parentIdx]];
      heapUp(arr, parentIdx);
    }
    // console.log('-arr: ', arr, ' idx: ', parentIdx);
  };

  //힙 내림차순 정렬
  const heapDown = (arr, idx) => {
    const leftIdx = 2 * idx + 1;
    const rightIdx = 2 * idx + 2;
    let smallIdx = idx;

    if (leftIdx < arr.length && arr[leftIdx] < arr[smallIdx]) {
      smallIdx = leftIdx;
    }
    if (rightIdx < arr.length && arr[rightIdx] < arr[smallIdx]) {
      smallIdx = rightIdx;
    }
    if (smallIdx !== idx) {
      [arr[idx], arr[smallIdx]] = [arr[smallIdx], arr[idx]];
      heapDown(arr, smallIdx);
    }
    console.log(arr);
  };

  const handleAdd = () => {
    const typeNum = Number(num);
    if (isNaN(typeNum)) return;
    // console.log(typeNum);
    const copyArr = [...heapArr, typeNum];
    heapUp(copyArr, copyArr.length - 1);
    setHeapArr(copyArr);
    setNum('');
    setResult('');
  };

  const handlePop = () => {
    if (heapArr.length === 0) return;
    if (heapArr.length === 1) {
      setHeapArr([]);
      setResult(heapArr.pop());
      return;
    }
    const newHeap = [...heapArr];

    const min = newHeap[0];
    //pop을 하면 제일 마지막 값이 사라지기에 0번째에 넣기
    newHeap[0] = newHeap.pop();
    heapDown(newHeap, 0); // 재정렬
    setHeapArr(newHeap);
    setResult(min);
    // console.log(newHeap);
  };

  return (
    <div className='m-4'>
      <h1 className='m-2 text-xl font-bold'>[Heap] 최소 힙 구현하기</h1>
      <h3 className='m-2 text-sm text-zinc-600 '>
        📝 설명: 숫자를 힙에 계속 추가하고, pop() 하면 항상 가장 작은 값이 나오도록 하세요.
      </h3>
      <hr />
      <div className='mt-4'>
        <input className='simple-input' type='text' value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={handleAdd} className='simple-blue-button'>
          추가하기
        </button>
        <button onClick={handlePop} className='simple-blue-button'>
          pop 하기
        </button>
      </div>
      <div className='m-3'>
        {JSON.stringify(heapArr)}
        <h3 className='text-lg font-semibold text-red-400'>출력: {popResult}</h3>
      </div>
    </div>
  );
}
