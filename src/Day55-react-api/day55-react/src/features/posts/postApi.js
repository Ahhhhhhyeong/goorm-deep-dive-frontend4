import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/*
RTK Query 기본 구조 흐름
1. API 서비스 파일을 만든다
2. 컴포넌트 안에서 자동 생성된 훅을 사용해서 데이터를 가져온다.

  => createAPI() 서버한테 요청을 쉽게 관리할수 있도록 해줌
  - ex) fetchBaseQuery() 기본적인 서버 요청(fetch)을 설정할 수 있는 함수

  ------------------------
  query() : 실제 요청에 필요하나 정보를 반환하는 함수
  newPosts는 사용자가 게시글을 추가할 때 

*/
export const postsApi = createApi({
  reducerPath: 'postsApi', // store에 등록할 때 사용하는 이름
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com', //실습용 API 주소
  }), // 서버와 통신할 때 사용할 기본 설정 (fetch설정)
  endpoints: (builder) => ({
    getPosts: builder.query({
      // query: () => '/posts',
      query: (userId) => `/posts?userId=${userId}`,
    }),
    // Post 요청 게시글 생성
    createPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
  /*
   api 요청들을 모아두는 곳 (정의)
   builder = RTK Query에서 제공하는 도우미 객체
   조회랑 업데이트는 방식이 조금다르다
    * query() = get요청(읽기) 어떤 경로에서 요청할 지
    * mutation() post/put/delete 요청 (쓰기)
    * getPosts 사용자가 정한 endpoint의 이름 
  */
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;

/*
게시글을 추가했을 때, 기존 게시글에 추가된 게시글을 추가해서 업데이트 
=> 즉 최신상태를 유지해야함

이걸 할 수 있는 방법
=> 캐싱된 게시글 목록을 자동으로 갱신하려면 필요한 내용이 있음

- invalidatesTags : ['posts'] 목록 자동 리패치


*/
