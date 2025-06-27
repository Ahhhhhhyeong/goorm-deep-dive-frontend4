import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function UseReducerPractices() {
  return (
    <div className='p-4 bg-white rounded-xl'>
      <nav className='m-4'>
        <Link to={'likeboard'} className='text-blue-400 hover:text-blue-800 ml-4'>
          [좋아요, 싫어요 버튼 구현 실습]
        </Link>
        <Link to={'timer'} className='text-blue-400 hover:text-blue-800 ml-4'>
          [타이머 구현 실습]
        </Link>
        <Link to={'game'} className='text-blue-400 hover:text-blue-800 ml-4'>
          [입장 명단 관리]
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
