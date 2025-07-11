//게시글 작성 및 수정
import React, { useState } from 'react';
import { useBoardStore } from '../../app/stores/boardStore';

/**
 *
 * @param {editingPost} : 현재 수정 중인 게시글 객체(id, title, content) 또는 null
 * @param {setEditingPost} : 상위 컴포넌트에서 내려오는 상태 변경함수.
 *                           수정 모드를 종료할 때 null로 설정
 * @returns : 화면
 */
export default function BoardForm({ editingPost, setEditingPost }) {
  /** 
   초기값 설정을 할 때 수정모드에 있는 editingPost 객체가 있다면 해당 게시글로 초기화
      title, content로 초기화
      만약 새글 등록이라면 빈 문자열로 초기화
   */
  const [title, setTitle] = useState(editingPost?.title || '');
  const [content, setContent] = useState(editingPost?.content || '');

  // 저장소 호출
  const addPost = useBoardStore((s) => s.addPost);
  const upDatePost = useBoardStore((s) => s.upDatePost);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력값이 없으면 리턴
    if (!title || !content) return;

    if (editingPost) {
      // 수정
      upDatePost(editingPost.id, title, content);
      setEditingPost(null); // 수정 모드 종료
    } else {
      // 새글 저장
      addPost(title, content);
    }

    setTitle('');
    setContent('');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-2xl border border-indigo-200 w-full max-w-md space-y-4 mt-8'>
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
