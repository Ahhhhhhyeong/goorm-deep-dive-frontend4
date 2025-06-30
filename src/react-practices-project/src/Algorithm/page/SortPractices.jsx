import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function SortPractices() {
  return (
    <div className='p-4 bg-white rounded-xl'>
      <nav className='m-4'>
        <Link to={'directed'} className='text-blue-400 mr-4 hover:text-blue-800'>
          [숫자 정렬기 만들기]
        </Link>
        <Link to={'minHeap'} className='text-blue-400 mr-4 hover:text-blue-800'>
          [최소 힙 구현]
        </Link>
        <Link to={'stringSort'} className='text-blue-400 mr-4 hover:text-blue-800'>
          [문자열 길이로 정렬]
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
