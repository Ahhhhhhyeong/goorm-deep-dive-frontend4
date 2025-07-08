import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// 저장을 도와줄 수 있도록 처리하는 구문
/* 1. slice 정의
    createSlice() : 리덕스의 상태 + reducer를 쉽게 만드는 함수
  */
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const { increment, decriment } = counterSlice.actions;

/* 앱 전체에서 사용할 상태 저장소 
  여러개의 슬라이스가 있다면 reducer: {a,b,c}처럼 관리함
*/
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default function ReduxTest() {
  /* 2. 카운터 컴포넌트 
  useDispatch() : 리덕스 액션을 실행하느 훅
  */
  const dispatch = useDispatch();
  /* useSelector() : 저장소에서 값을 읽는다 */
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      {/* 카운터 만들기 */}
      <h3>ReduxTest1</h3>
      <h4>{count}</h4>

      <button onClick={() => dispatch()}>+ 증가</button>
      <button onClick={() => dispatch()}>- 감소</button>
    </div>
  );
}
