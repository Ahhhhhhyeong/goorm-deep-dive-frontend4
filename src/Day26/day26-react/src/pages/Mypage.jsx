import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Mypage() {
  return (
    <div>
      <h1>Mypage</h1>
      <nav>
        <Link to='profile'>프로필</Link>
        <br />
        <Link to='settings'>설정</Link>
      </nav>
      <hr />
      {/* 중첩된 라우터에서 자식 페이지가 보일 수 있도록 위치 지정 */}
      <Outlet />
    </div>
  );
}
