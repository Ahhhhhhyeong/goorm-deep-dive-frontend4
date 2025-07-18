import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePostQuery } from '../../hook/useFetchBlog';

export default function BlogDetail() {
  const params = useParams();
  const { id } = params;

  const { data, isFetching, isError } = usePostQuery({
    searchType: 'detail',
    searchTerm: id,
  });

  // id가 없으면 로딩 표시
  if (!id) {
    return <div>ID를 불러오는 중...</div>;
  }

  if (isFetching) {
    return (
      <div className=' flex items-center justify-center  z-50'>
        <button
          type='button'
          class='bg-indigo-500 text-white rounded-full p-6 flex items-center justify-center shadow-lg'
          disabled>
          {' '}
          <svg className='mr-3 w-5 h-5 animate-spin' viewBox='0 0 24 24'>
            <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' className='opacity-25' />
            <path
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              className='opacity-75'
            />
          </svg>
          불러오는 중...
        </button>
      </div>
    );
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }
  console.log(data);
  return (
    <div className='container mx-auto px-4 py-6'>
      {data && (
        <article className='bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden'>
          <div className='p-6'>
            <header className='mb-6'>
              <h1 className='text-2xl font-bold text-gray-900 mb-3 leading-tight'>{data.title}</h1>
              <div className='flex items-center text-sm text-gray-500'>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-medium'>
                  작성자: {data.userId}
                </span>
              </div>
            </header>

            <div className='prose max-w-none'>
              <p className='text-gray-700 text-base leading-7 whitespace-pre-wrap'>{data.body}</p>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}
