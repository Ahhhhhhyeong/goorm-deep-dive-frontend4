import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function AlgorithmPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='container mx-auto py-8 px-4'>
        <h1 className='text-4xl font-bold text-center mb-10 text-gray-800'>CosPro 알고리즘</h1>

        <nav className='flex flex-wrap justify-center gap-4 mb-8'>
          <Link
            to={'0714'}
            className='bg-white hover:bg-blue-50 text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md border border-blue-200 transition duration-200 hover:shadow-lg'>
            📅 07월14일
          </Link>
          {/* 추가 링크들을 위한 공간 */}
        </nav>

        <main className='bg-white rounded-xl shadow-lg p-8'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
