import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function PostList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>📄 게시글 목록</h2>
      {posts.length === 0 ? (
        <p>작성된 게시글이 없습니다.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <button onClick={() => dispatch(deletePost(post.id))}>삭제</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
