import React from 'react';
import { usePostStroe } from '../../app/postStore';

export default function PostList() {
  const posts = usePostStroe((state) => state.posts);
  const deletePost = usePostStroe((state) => state.deletePost);
  return (
    <div className='max-w-xl mx-auto mt-2 p-6 bg-white rounded-xl shadow space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800'>📄 게시글 목록</h2>

      {posts.length === 0 ? (
        <p className='text-gray-500'>작성된 게시글이 없습니다.</p>
      ) : (
        <ul className='space-y-4'>
          {posts.map((post) => (
            <li key={post.id} className='border rounded-lg p-4 shadow-sm bg-gray-50 space-y-2'>
              <strong className='text-lg text-gray-900'>{post.title}</strong>
              <p className='text-gray-700'>{post.body}</p>
              <div className='flex justify-end'>
                <button
                  onClick={() => deletePost(post.id)}
                  className='px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors'>
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
