//PostForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postSlice';

// 사용자에게 입력 받아서 dispatch() 실행
export default function PostForm() {
  // 입력한 게시글을 저장하는 변수
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 리덕스 툴킷 호출
  const dispatch = useDispatch();

  // Click Event
  const handleSubmit = (e) => {
    // 폼 제출할 때 새로고침 이벤트 막기
    e.preventDefault();

    // 제목이나 내용이 없을 때 리턴
    if (!title || !body) return;

    /* 리덕스 툴킷 이벤트 호출 */
    dispatch(createPost(title, body));

    // 입력부분 초기화
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4'>
        <h2 className='text-2xl font-bold text-center'>📝 새 글 작성</h2>

        <input
          type='text'
          placeholder='제목'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <textarea
          placeholder='내용'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={6}
          className='w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <button
          type='submit'
          className='w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold transition-colors'>
          게시하기
        </button>
      </form>
    </div>
  );
}
