import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-gray-100 border-t py-6'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
        {/* 왼쪽 - 로고/브랜드 */}
        <h3 className='text-lg font-semibold text-gray-700'>A Event Shop</h3>

        {/* 중앙 - 메뉴 */}
        <nav className='flex space-x-6 my-4 md:my-0'>
          <a href='#' className='text-gray-600 hover:text-gray-900 text-sm'>
            이용약관
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-900 text-sm'>
            개인정보처리방침
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-900 text-sm'>
            문의하기
          </a>
        </nav>

        {/* 오른쪽 - 저작권 */}
        <p className='text-xs text-gray-500'>&copy; 2025 A Event Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
