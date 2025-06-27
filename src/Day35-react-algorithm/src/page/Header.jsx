import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='nav-wrapper mb-10'>
      <h3 className='text-lg text-orange-400'>그래프 자료구조 메뉴</h3>
      <Link className='nav' to={'/'}>
        HOME
      </Link>
      <Link className='nav' to={'/undirect'}>
        무방향 그래프
      </Link>
      <Link className='nav' to={'/direct'}>
        방향 그래프
      </Link>
      <Link className='nav' to={'/subway'}>
        지하철 노선도
      </Link>
      <Link className='nav' to={'/subwaysearch'}>
        지하철 노선도2
      </Link>
      <Link className='nav' to={'/yutube'}>
        유튜브
      </Link>
    </nav>
  );
}
