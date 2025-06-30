import React, { useState } from 'react';

/*
  직접 heap 구현
  배열을 이용해서 최소 힙
  react상태로 힙 관리(useState)
  삽입, 삭제, 출력 기능 포함
*/
export default function HeapEx() {
  // 입력값 저장
  const [inputNum, setInput] = useState(0);
  // 힙구조를 저장하는 배열
  const [heap, setHeap] = useState([]);

  // 삽입하는 함수
  const insertValue = () => {
    /* 문자-> 숫자로 변경하는 함수 
      string 문자 타입
      number 숫자 타입 */
    const value = Number(inputNum);
    console.log(value);

    /* 예외적인 처리를 해야된다. 
     Not-a-Number 숫자가 아님 
     숫자가 아니면 true , 숫자임 false
     
     !isNaN(){ 숫자이면 실행할 명령문}
     */
    if (isNaN(value)) {
      return; // 숫자가 아니면 힙에 저장할 필요가 없다
    }

    // 숫자이면 힙에 저장하기
    const newHeap = heapInsert([...heap, value]);
    setHeap(newHeap);
    setInput('');
  };

  // 삭제하는 함수
  const removeMin = () => {
    //만약 배열이 비어있다면
    if (heap.length === 0) return;

    //기존 배열 가져오기
    const newHeap = [...heap];
    //가장 작은 값 = root
    const min = newHeap[0];
    //배열에서 꺼내!
    newHeap[0] = newHeap.pop();
    heapifyDown(newHeap);
  };

  /**
   * 실제 힙 구조를 이용해서 데이터를 제일 앞쪽으로 가져오는 작업 함수
   */
  const heapInsert = (arr) => {
    console.log('heapInsert');
    let i = arr.length - 1;
    /* 지금 막 추가한 마지막 요소의 인덱스를 i에 저장
    배열의 마지막은 항상 자식 노드!!
     */
    while (i > 0) {
      /* 배열의 번호가 0부터 시작 : 현재 부모를 찾을 때 -1
      floor(): 소수점 버리기 (반올림xx)
       */
      const parent = Math.floor((i - 1) / 2);
      console.log('부모: ', parent);

      //부모가 더 작으면 끝
      if (arr[parent] <= arr[i]) {
        break;
      }
      //부모가 더 크고 자식이 작을 경우에는 위치 변경
      [arr[parent], arr[i]] = [arr[i], arr[parent]]; //swap

      //부모로 이동
      i = parent;
    }
    console.log('변경된 : ', arr);
    return arr;
  };

  /* 실제 삭제를 해주는 함수 
  부모 -> 자식으로 정렬
  루트 노드부터 시작해서 자식 노드들과 비교하며 내려가며 자리를 바꿔줌
 */
  const heapifyDown = (arr) => {
    //배열의 맨 앞 루트 노드(최소값)
    let i = 0;
    const length = arr.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let small = i;

      if (left < length && arr[left] < arr[small]) {
        small = left;
      }
      if (right < length && arr[right] < arr[small]) {
        small = right;
      }

      if (small === i) break;

      //위에 실행한 내용을 기준으로 값 교환
      [arr[i], arr[small]] = [arr[small], arr[i]];

      //자식으로 내려가서 다시 비교
      i = small;
    }
    return arr;
  };
  return (
    <div>
      <h3>Heap 자료 구조</h3>
      <input type='text' onChange={(e) => setInput(e.target.value)} placeholder='숫자 입력' value={inputNum} />
      <button onClick={insertValue}>삽입</button>
      <button onClick={removeMin}>최소값 삭제</button>

      <h4>Heap 구조 배열</h4>
      <p>{JSON.stringify(heap)}</p>
    </div>
  );
}

/* heap-js 라이브러리 사용
import Heap from 'heap-js';

export default function HeapEx() {
  const heap = new Heap.MinHeap();
  heap.push(5, 1, 4);
  console.log('data: ', heap.pop());
  return (
    <div>
      <h3>Heap 자료 구조</h3>
    </div>
  );
}
*/
