import React, { useEffect } from 'react';
import { useUserStore } from '../store/userStore';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const isLoggined = useUserStore((state) => state.isLoggined);
  const currentUser = useUserStore((state) => state.currentUser);
  const setLogout = useUserStore((state) => state.setLogout);

  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggined) {
      alert('로그아웃을 합니다.');
      setLogout(currentUser.id);
    }
    navigate('/login');
  };

  return (
    <header className='w-full bg-white shadow-md p-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <Link to={'/'} className='text-xl font-bold'>
          Zustand 간편하네
        </Link>
        <div className='ml-auto'>
          {isLoggined ? (
            <button
              onClick={handleClick}
              className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow'>
              로그아웃
            </button>
          ) : (
            <button
              onClick={handleClick}
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow'>
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
