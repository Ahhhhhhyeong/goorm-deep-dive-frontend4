import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function GraphPractices() {
  return (
    <div className='p-4 bg-white rounded-xl'>
      <nav className='m-4'>
        <Link to={'numArr'} className='text-blue-400 mr-4 hover:text-blue-800'>
          [도시 연결]
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
