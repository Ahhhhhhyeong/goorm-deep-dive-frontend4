'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className='font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 text-gray-800'>
      <Link href='/events' className='text-3xl font-bold mb-8 text-center text-blue-600'>
        이벤트 보러가기 👉
      </Link>
      <Link href='/admin/events' className='text-3xl font-bold mb-8 text-center text-blue-600'>
        이벤트 추가하기 👉
      </Link>
    </div>
  );
}
