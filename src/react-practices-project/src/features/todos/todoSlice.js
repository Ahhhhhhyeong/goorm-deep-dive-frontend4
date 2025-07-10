// Todo 관리 모듈
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchTodo } from './FetchTodo';

export const getTodos = createAsyncThunk('todos/getTodos', async (_, thunkAPI) => {
  try {
    const resp = await FetchTodo();
    console.log('Thunks 안 응답 ', resp);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const todoInit = {
  todos: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: todoInit,
  reducers: {
    doneTodo(state, action) {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);
      targetTodo.completed = !targetTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { doneTodo, removeTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
