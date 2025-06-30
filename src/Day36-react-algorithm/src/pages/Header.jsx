import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <Link className='nav' to={'/heap'}>
        Heap 자료구조
      </Link>
      <Link className='nav' to={'/heapPractices'}>
        Heap 연습
      </Link>
      <Link className='nav' to={'/quicksort'}>
        Quick 정렬
      </Link>
    </nav>
  );
}
