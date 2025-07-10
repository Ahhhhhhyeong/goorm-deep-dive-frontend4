//store.js - 저장소
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;

/* 로직
  - 프로그램이 어떻게 동작할지 결정하는 규칙과 흐름
  - 조건문, 반복문, 함수실행, 상태 변경, API 호출 등 실제 동작을 정의한 코드
  
  => 개발을 할 때는 관례적으로 로직을 작성할 때는 js 확장자로 작성하는 경우가 많음
  => 단, jsx로 바꿀 수는 있다.

  * 저장소는 하나 생성됨
*/
