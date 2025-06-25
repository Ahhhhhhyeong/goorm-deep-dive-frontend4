import React, { useReducer } from 'react';

/**버튼 3개를 만들어서 각각 클릭을 했을 때
 * 각 값들이 변경될 수 있도록 리듀서를 이용해서 상태관리  */

/** 카운트 초기값 = 0
 * initState = count상태의 시작점
 */
const initState = 0;

/**
 *
 * @param {*} state : count 현재 값
 * @param {*} action : 변경되는 상태의 값
 */
function reducer(state, action) {
  console.log(`현재 액션의 타입: ${action.type}`);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>➕증가</button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>➖감소</button>

      <button onClick={() => dispatch({ type: 'RESET' })}>🔁초기화</button>
    </div>
  );
}
