import React from 'react';
import { useGetPostsQuery } from './commentApi';

export default function CommentList() {
  const { data: comments, isLoading, isError } = useGetPostsQuery(1);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!!</p>;

  return (
    <div>
      <h3>1번 게시글의 코멘트</h3>
      <p>{JSON.stringify(comments)}</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.email}</p>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
