import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Programmers() {
  return (
    <div>
      <h1>프로그래머스 알고리즘 문제</h1>
      <nav className='navi'>
        <Link to={'prob1'}>완주하지 못 한 선수</Link>
        <Link to={'prob2'}>베스트 앨범</Link>
      </nav>
      <Outlet />
    </div>
  );
}
