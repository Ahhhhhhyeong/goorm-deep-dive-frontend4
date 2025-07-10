// postSlice.js
// 게시글 목록 저장, 새글 추가, 삭제

import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
      });
    },
    //삭제하는 함수 추가!
  },
});

// 위에 있는 내용을 내보내기 하기 위해서 (store)에서 행동을 가져가서
// 실행해야된다.
export const { createPost } = postSlice.actions;
export default postSlice.reducer;
