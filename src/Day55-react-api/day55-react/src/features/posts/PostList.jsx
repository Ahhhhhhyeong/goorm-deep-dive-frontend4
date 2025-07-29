import React from 'react';
import { useGetPostsQuery } from './postApi';

export default function PostList() {
  /*
   isLoading, isError 
    - RTK Query가 자동으로 제공하는 상태 값 
    - useGetPostsQuery() hook을 만들면 자동으로 가져온다. 
    - query()로 호출했을 때 자동으로 생성되서 가져올 수 있다.
  */
  const { data: posts, isLoading, isError } = useGetPostsQuery(1);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div>
      <h3>게시글 목록</h3>
      <ul>
        {posts?.map((post) => {
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.userId}</p>
          </li>;
        })}
      </ul>
      <p>{JSON.stringify(posts)}</p>
    </div>
  );
}
