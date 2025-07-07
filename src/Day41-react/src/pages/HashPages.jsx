import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function HashPages() {
  return (
    <div>
      <h1>해시</h1>

      <nav className='navi'>
        <Link to='hash1'>1번</Link>
        <Link to='hash2'>2번</Link>
        {/* <Link to='hash3'>비밀번호</Link> */}
        <Link to='hash4'>SHA암호화</Link>
      </nav>

      <Outlet />
    </div>
  );
}
