import React from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className=''>
      <h1 className='text-3xl font-bold'>로그인</h1> <br />
      <Link to={'/login/loginform'} className='text-blue-400 hover:text-blue-800'>
        로그인 이동
      </Link>
      <h1 className='text-3xl font-bold'>물품 구경 ➡️ 장바구니</h1>
      <Link to={'/product'} className='text-blue-400 hover:text-blue-800'>
        장바구니
      </Link>
      <h1 className='text-3xl font-bold'>스크롤 투톱, 이미지 캐러셀 실습</h1>
      <Link to={'/reftest'} className='text-blue-400 hover:text-blue-800'>
        06월 24일 실습
      </Link>
      <h1 className='text-3xl font-bold'>06/25 실습 모음 페이지</h1>
      <Link to={'/reduceprcd'} className='text-blue-400 hover:text-blue-800'>
        06월 25일 실습
      </Link>
      <h1 className='text-3xl font-bold'>06/26 실습 모음 페이지</h1>
      <Link to={'/treeprcd'} className='text-blue-400 hover:text-blue-800'>
        06월 26일 실습
      </Link>
      <h1 className='text-3xl font-bold'>06/27 실습 모음 페이지</h1>
      <Link to={'/graphprcd'} className='text-blue-400 hover:text-blue-800'>
        06월 27일 실습
      </Link>
      <h1 className='text-3xl font-bold'>06/30 실습 모음 페이지</h1>
      <Link to={'/sortprcd'} className='text-blue-400 hover:text-blue-800'>
        06월 30일 실습
      </Link>
    </div>
  );
}

export default App;
