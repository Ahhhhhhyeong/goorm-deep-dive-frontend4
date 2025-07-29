# [Day55] 25.07.29 배운내용 정리

---

## RTK Query란?

> **RTK Query**는 Redux Tool Kit (RTK)에 포함된 API 서버와 통신을 위한 강력한 도구입니다.

- REST API 또는 GraphQL 서버와 통신할 때 데이터를 가져오고 상태를 관리하는 작업을 자동으로 처리합니다.

## 왜 RTK Query를 사용하는가?

### 기존 방식의 문제점

기존에는 서버와 통신하기 위해 다음과 같은 작업들이 필요했습니다:

- 데이터를 가져오기 위해 **axios로 요청**
- 응답 데이터를 저장할 **useState**
- API 요청 시기를 결정하는 **useEffect**
- **로딩 중 상태, 에러 상태**를 직접 구현
- **전역상태 관리**

→ 반복코드가 너무 많고 유지보수가 힘듦

### 프로젝트 규모별 권장 방법

- **작은 프로젝트**: Axios + useState, useEffect
- **규모가 있는 프로젝트**: RTK Query (Redux 연동으로 글로벌 상태 + 서버 상태 통합)

## 설치 방법

```bash
npm install @reduxjs/toolkit react-redux
```

## 기본 구조 및 설정

### 1. Store 설정 (store.js)

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../features/posts/postApi';
import { commentsApi } from '../features/comments/commentApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([postsApi.middleware, commentsApi.middleware]),
});
```

**configureStore()의 특징:**

- 리덕스 툴킷에서 제공하는 함수
- createStore보다 간단하게 설정 가능
- reducer, middleware 등의 설정을 포함하고 있음

### 1-2. Main에 Provider 설정 (main.jsx)

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

- 메인에 `store` Provider로 App을 감싸주어야 한다.

### 2. API 서비스 파일 생성 (postsApi.js)

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi', // store에 등록할 때 사용하는 이름
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com', // API 주소
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (userId) => `/posts?userId=${userId}`,
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;
```

**주요 개념:**

- **createApi()**: 서버 요청을 쉽게 관리할 수 있도록 해줌
- **fetchBaseQuery()**: 기본적인 서버 요청(fetch)을 설정할 수 있는 함수
- **builder**: RTK Query에서 제공하는 도우미 객체
- **query()**: GET 요청 (읽기)
- **mutation()**: POST/PUT/DELETE 요청 (쓰기)

### 3. 컴포넌트에서 사용 (PostList.jsx)

```javascript
import React from 'react';
import { useGetPostsQuery } from './postApi';

export default function PostList() {
  const { data: posts, isLoading, isError } = useGetPostsQuery(1);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div>
      <h3>게시글 목록</h3>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**자동 제공되는 상태 값:**

- **isLoading**: 로딩 상태
- **isError**: 에러 상태
- **data**: 응답 데이터

## RTK Query 기본 흐름

1. **API 서비스 파일을 만든다**
2. **컴포넌트 안에서 자동 생성된 훅을 사용해서 데이터를 가져온다**

## 캐싱 및 자동 갱신

게시글을 추가했을 때 기존 게시글 목록을 자동으로 갱신하려면:

- **invalidatesTags**: ['posts'] 를 사용하여 목록 자동 리패치 가능

---

## 4. Mutation 사용하기 (PostsForm.jsx)

### Mutation Hook 사용법

```javascript
import React from 'react';
import { useCreatePostMutation } from './postApi';

export default function PostsForm() {
  const [createPost, { isSuccess, isLoading, isError }] = useCreatePostMutation();

  const handleCreate = async () => {
    await createPost({
      title: 'New Posts',
      body: 'New Posts Contents',
      userId: 1,
    });

    if (isSuccess) {
      console.log('성공했는지? ', isSuccess);
    }
    alert('게시글이 추가되었습니다.');
  };

  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러 발생!!</p>;

  return (
    <div>
      <h2>게시글 작성(추가)</h2>
      <button onClick={handleCreate}>게시글 추가</button>
    </div>
  );
}
```

### Mutation Hook의 구조

**`use~~Mutation()` 반환값:**

```javascript
const [triggerFunc, resultObj] = useCreatePostMutation();
```

- **triggerFunc**: 실제 요청을 보내는 함수
- **resultObj**: 요청 상태(loading, error, success)를 알 수 있는 객체

### 상태 관리

**자동 제공되는 상태:**

- **isSuccess**: 요청 성공 상태
- **isLoading**: 요청 진행 상태
- **isError**: 요청 실패 상태

## Query vs Mutation 비교

| 구분          | Query                          | Mutation                                           |
| ------------- | ------------------------------ | -------------------------------------------------- |
| **용도**      | 데이터 읽기 (GET)              | 데이터 쓰기 (POST/PUT/DELETE)                      |
| **반환값**    | `{ data, isLoading, isError }` | `[triggerFunc, { isSuccess, isLoading, isError }]` |
| **자동 실행** | 컴포넌트 마운트 시 자동 실행   | 수동으로 triggerFunc 호출 시 실행                  |
| **사용 예시** | 목록 조회, 상세 조회           | 생성, 수정, 삭제                                   |

## RTK Query의 핵심 장점

✅ **자동 상태 관리**: 로딩, 에러, 성공 상태를 자동으로 제공  
✅ **중복 요청 방지**: 동일한 요청은 캐싱하여 중복 호출 방지  
✅ **자동 재검증**: 데이터 변경 시 관련 쿼리 자동 갱신  
✅ **타입 안정성**: TypeScript와 완벽 호환  
✅ **개발자 도구**: Redux DevTools로 디버깅 가능

## 전체 플로우 정리

1. **API 정의** (`postApi.js`)

   - `createApi`로 API 엔드포인트 정의
   - `query`와 `mutation` 설정

2. **Store 연결** (`store.js`)

   - `configureStore`에 API reducer와 middleware 등록

3. **컴포넌트에서 사용**

   - **조회**: `useGetPostsQuery()` 훅 사용
   - **생성/수정/삭제**: `useCreatePostMutation()` 훅 사용

4. **자동 상태 관리**
   - 로딩, 에러, 성공 상태 자동 제공
   - 캐싱 및 자동 갱신

---

💡 **핵심 포인트**: RTK Query는 서버 상태와 클라이언트 상태를 통합적으로 관리하여, 복잡한 비동기 로직을 간단하고 선언적으로 처리할 수 있게 해줍니다!
