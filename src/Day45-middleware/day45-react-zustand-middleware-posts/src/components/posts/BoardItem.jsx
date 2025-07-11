//상세 게시글
import React from 'react';
import { useBoardStore } from '../../app/stores/boardStore';

export default function BoardItem({ post, setEditingPost }) {
  const deletePost = useBoardStore((state) => state.deletePost);
  return (
    <div>
      <div style={{ border: '1px solid gray', padding: 10, marginBottom: 10 }}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button onClick={() => setEditingPost(post)}>수정</button>
        <button onClick={() => deletePost(post.id)}>삭제</button>
      </div>
    </div>
  );
}
