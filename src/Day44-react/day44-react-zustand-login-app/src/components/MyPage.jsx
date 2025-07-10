import React from 'react';
import { useUserStore } from '../store/userStore';

export default function MyPage() {
  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <div className='max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6'>
      <h2 className='text-xl font-bold text-gray-800 mb-4 text-center'>로그인 상태 관리 실습</h2>

      {currentUser ? (
        <div className='space-y-2 text-gray-700'>
          <div className='flex justify-between'>
            <span className='font-semibold'>이름:</span>
            <span>{currentUser.name}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>아이디:</span>
            <span>{currentUser.id}</span>
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold'>비밀번호:</span>
            <span>{currentUser.password}</span>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-500'>로그인이 안되어있습니다</p>
      )}
    </div>
  );
}
