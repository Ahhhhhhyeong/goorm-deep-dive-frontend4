import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-4 bg-white shadow-md'>
      {/* 왼쪽 로고 */}
      <aside className='flex items-center'>
        <Link href={'/'} className='text-xl font-bold text-gray-800'>
          A Event Shop
        </Link>
      </aside>

      {/* 중앙 메뉴 */}
      <nav className='flex space-x-6'>
        <Link href='/events' className='text-gray-600 hover:text-gray-900 cursor-pointer'>
          Event Info
        </Link>
        <p className='text-gray-600 hover:text-gray-900 cursor-pointer'>About</p>
        <p className='text-gray-600 hover:text-gray-900 cursor-pointer'>Contact</p>
      </nav>

      {/* 오른쪽 - 로그인 */}
      <aside className='flex items-center space-x-3'>
        <Image src='/profile.png' alt='프로필' height={32} width={32} className='rounded-full border border-gray-300' />
        <div className='text-right'>
          <p className='text-sm text-gray-500'>반갑습니다</p>
          <p className='text-sm font-semibold text-gray-800'>ㅇㅇㅇ님</p>
        </div>
      </aside>
    </header>
  );
}
