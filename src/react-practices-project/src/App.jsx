import React from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className=''>
      <h1 className='text-3xl font-bold'>로그인</h1> <br />
      <Link
        to={'/login/loginform'}
        className='text-blue-400 hover:text-blue-800'>
        로그인 이동
      </Link>
      <h1 className='text-3xl font-bold'>물품 구경 ➡️ 장바구니</h1>
      <Link 
        to={'/product'}
        className='text-blue-400 hover:text-blue-800'>
      장바구니</Link>
    </div>
  );
}

export default App;
