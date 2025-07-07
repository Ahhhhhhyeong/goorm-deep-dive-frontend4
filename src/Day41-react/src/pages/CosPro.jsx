import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function CosPro() {
  return (
    <div>
      <h1>CosPro 문제</h1>
      <nav className='navi'>
        <Link to={'question7'}>영어강의 수강자</Link>
        <Link to={'question8'}>펠린드롭</Link>
      </nav>
      <Outlet />
    </div>
  );
}
