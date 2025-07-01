import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function BigO() {
  return (
    <div>
      <h1>BigO 나타내기</h1>
      <nav className='navi'>
        <Link to={'bigo1'}>O(1)</Link>
        <Link to={'bigon'}>O(n)</Link>
        <Link to={'bigon2'}>O(n^2)</Link>
      </nav>
      <Outlet />
    </div>
  );
}
