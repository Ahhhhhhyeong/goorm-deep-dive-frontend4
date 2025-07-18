import React from 'react';
import ReactIcon from '../assets/react.svg';
import PersonIcon from '../assets/_IconPerson.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex justify-between items-center bg-rose-100'>
      <Link to={'/'} className='flex items-center justify-center p-4'>
        <img src={ReactIcon} alt='icon' className='w-13 h-13 mr-3' />
        <p className='text-lg font-semibold'>내 블로그</p>
      </Link>

      <div className='flex items-center space-x-2 p-4'>
        {/* PersonIcon 버튼 */}
        <button
          className='p-2 rounded-full hover:bg-rose-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-1'
          aria-label='프로필'>
          <img src={PersonIcon} alt='person icon' className='w-6 h-6' />
        </button>

        {/* 메뉴 아이콘 */}
        <button
          className='p-2 rounded-full hover:bg-rose-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-1'
          aria-label='메뉴'>
          <svg
            className='w-6 h-6 text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>
    </div>
  );
}
