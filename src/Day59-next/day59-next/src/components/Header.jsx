// 공통적인 메뉴탭을 저장하는 컴포넌트
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='bg-sky-600 text-white p-4'>
      <nav className='flex justify-between max-w-4xl mx-auto'>
        <Link href='/' className='font-bold text-xl'>
          MyShop
        </Link>
        <div className='space-x-4'>
          <Link href='/'>Home</Link>
          <Link href='/products'>Product</Link>
        </div>
      </nav>
    </header>
  );
}
