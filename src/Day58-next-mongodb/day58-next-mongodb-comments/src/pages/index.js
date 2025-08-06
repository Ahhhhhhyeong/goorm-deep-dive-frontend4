import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('/api/commentApi')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data.data || []);
      })
      .catch((err) => {
        console.error('Error 발생: ', err.message);
      });
  }, []);

  // 날짜 시간 포맷팅
  function dateFormatting(timestamp) {
    const date = new Date(timestamp);
    // 포맷팅 시작
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} 
    ${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
  }

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 bg-gray-50 min-h-screen'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl'>
        {/* 입력 폼 */}
        <div className='flex flex-col sm:flex-row w-full gap-4'>
          <input
            type='text'
            name='search'
            placeholder='댓글을 입력하세요'
            className='flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <button className='px-6 py-2 bg-zinc-500 text-white rounded-md hover:bg-zinc-600 transition'>추가</button>
        </div>
        <div className='flex flex-col w-full'>
          <p className='text-sm text-zinc-600 text-right'>댓글 개수: {comments.length}개</p>
        </div>
        {/* 댓글 목록 */}
        <ul className='w-full flex flex-col gap-6'>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <li key={comment.id} className='border border-gray-200 rounded-md p-4 bg-white shadow-sm'>
                <p className='text-sm text-zinc-600 mb-1'>
                  <span className='font-semibold'>작성자:</span> {comment.name} |{' '}
                  <span className='font-semibold'>이메일:</span> {comment.email}
                </p>
                <p className='text-xs text-zinc-400 mb-2'>작성일자: {dateFormatting(comment.date)}</p>
                <p className='text-zinc-700'>{comment.text}</p>
              </li>
            ))
          ) : (
            <p className='text-mb text-red-500'>댓글이 없습니다.</p>
          )}
        </ul>
      </main>
    </div>
  );
}
