import Link from 'next/link';
import React from 'react';

export default function Custom404Page() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>404 - 페이지를 찾을 수 없습니다.</h1>
      <p className='text-gray-600 mb-6'>요청하신 페이지가 존재하지 않거나 삭제되었습니다.</p>
      <Link href='/' className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
