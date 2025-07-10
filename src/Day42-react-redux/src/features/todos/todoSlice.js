//파일명: todoSlice.js
//  하나의 기능(할일 관리) 단위 모듈
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchTodos } from './FetchTodos';

/**
 * 비동기 Thunk 만들기
 * 네임스페이스 : Thunk의 이름(여러 비동기 함수 구별용)
 */
export const getTodos = createAsyncThunk('todos/getTodos', async (_, thunkAPI) => {
  try {
    const resp = await FetchTodos();
    console.log('Thunk 안 API 응답:', resp);
    return resp;
  } catch (error) {
    //실패시 에러메시지를 따로 담아서 리덕스에게 전달하기 위해 thunkAPI에 여러개의 객체를 담아옴
    //rejectWithValue()에  메시지를 담아서 rejected 액션으로 넘김 -> payload에 에러 상태가 추가됨
    return thunkAPI.rejectWithValue(error.message);
  }
});

const myData = {
  todos: [], // 할일 항목을 담을 배열
  isLoading: false, // 데이터를 로딩 중인지 여부
  error: null, // API 호출 실패시 에러 메시지를 담는 필드
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: myData,
  reducers: {
    // 액션과 상태 변경 로직을 정의한다
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(), // 현재 시간을 기준으로 고유한 id 부여한다
        title: action.payload, // 입력된 텍스트가 제목이 됨
      });
    }, // 새 할일 todos 배열에 추가하는 리듀서함수
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // 데이터 요청중..pending -> 로딩중..
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true; // 로딩 시작 표시
        state.error = null; // 이전 에러 초기화
      }) //비동기 시작됨

      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false; // 로딩끝
        state.todos = action.payload; // 응답 데이터 저장
      }) //성공함

      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false; //로딩끝
        state.error = action.payload; //에러메시지 저장
      }); //실패함
  },
});

// 액션과 리듀서를 내보내기 하는 방법
export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;

/**
 * // createSlice()
//  - 상태(state)와 그 상태를 바꾸는 방법(reducer)을 한 파일에서
//    한번에 만드는 함수

 * createSlice()
 *  key는 고정되어있음
 *  store에서 key를 확인해서 저장소를 만들어 그 안에 리듀서들을 저장하고 관리함
 */
