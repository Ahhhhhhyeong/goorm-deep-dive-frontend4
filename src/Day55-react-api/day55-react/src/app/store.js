// store.js
/*
전체적인 영역으로 데이터를 보내기위한 저장소
*/
import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../features/posts/postApi';
import { commentsApi } from '../features/comments/commentApi';
// Redux 호출
/*
 confugureStore() = 리덕스 툴킷에서 제공하는 함수
 createStore보다 간단하게 설정 가능!
 reducer, middleware등의 설정을 포함하고 있다!!
 자동으로 동작할 key가 필요
 */

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([postsApi.middleware, commentsApi.middleware]),
});
