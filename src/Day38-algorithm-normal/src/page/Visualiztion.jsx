import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Visualiztion() {
  return (
    <div>
      <h1>알고리즘 시각화</h1>
      <nav className='navi'>
        <Link>빅오표기법</Link>
      </nav>
      <div className='question-div'>
        <Outlet />
      </div>
    </div>
  );
}
