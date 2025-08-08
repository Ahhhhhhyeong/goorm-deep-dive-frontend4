import React from 'react';

export default function WriteForm() {
  return (
    <div className='flex flex-row gap-5 justify-center items-center w-min-screen'>
      <form action='/api/hello' method='POST' className='flex flex-col gap-2 w-lg'>
        <input type='text' name='title' placeholder='상품명 입력' className='border border-blue-400 p-1 rounded' />
        <input type='number' name='price' placeholder='상품가격 입력' className='border border-blue-400 p-1 rounded' />

        <button type='submit' className='bg-blue-400 text-white p-1 rounded'>
          상품 추가
        </button>
      </form>
    </div>
  );
}

/*
이렇게하니 /api/hello 로 페이지가 넘어감
*/
