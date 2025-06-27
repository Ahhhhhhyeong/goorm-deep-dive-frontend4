import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function TreeAlgorithmPractices() {
  return (
    <div className='p-4 bg-white rounded-xl'>
      <nav className='m-4'>
        <Link to={'list'} className='text-blue-400 mr-4 hover:text-blue-800'>
          [수업 목차 트리 실습]
        </Link>
        <Link to={'company'} className='text-blue-400 mr-4 hover:text-blue-800'>
          [회사 조직도 트리 실습]
        </Link>
        <Link to={'game'} className='text-blue-400 mr-4 hover:text-blue-800'>
          [게임 선택지 트리 실습]
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
