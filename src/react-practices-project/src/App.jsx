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
    </div>
  );
}

export default App;
