import React from 'react';

export default function NaverLogin() {
  function handleLogin() {}
  return (
    <div>
      <h1>네이버 로그인</h1>
      <button
        onClick={handleLogin}
        className='bg-green-400 text-white font-bold w-[10rem] h-[3rem] rounded-lg my-3'>
        네이버 로그인
      </button>
    </div>
  );
}
