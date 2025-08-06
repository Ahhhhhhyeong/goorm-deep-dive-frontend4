import React from 'react';
import ProblemOne from './ProblemOne';

export default function Algorithm() {
  return (
    <div className='min-h-screen bg-gray-50 px-6 py-12'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-zinc-800 mb-8'>알고리즘 문제</h1>

        {/* 문제 리스트 영역 */}
        <section className='flex flex-col gap-8'>
          {/* 여기에 문제별 컴포넌트를 삽입 */}
          <div className='border border-gray-200 rounded-lg shadow-sm p-6 bg-white'>
            {/* 문제 1 컴포넌트 자리 */}
            <h2 className='text-xl font-semibold text-pink-600 mb-2'>문제 1 올바른 괄호</h2>
            <ProblemOne />
            {/* <p className='text-zinc-700'>여기에 문제 1의 풀이 및 결과가 들어갑니다.</p> */}
          </div>

          <div className='border border-gray-200 rounded-lg shadow-sm p-6 bg-white'>
            {/* 문제 2 컴포넌트 자리 */}
            <h2 className='text-xl font-semibold text-pink-600 mb-2'>문제 2</h2>
            {/* <ProblemTwo /> */}
            <p className='text-zinc-700'>여기에 문제 2의 풀이 및 결과가 들어갑니다.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
