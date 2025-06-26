import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='nav-wrapper'>
      <h3>알고리즘 메뉴</h3>
      <Link className='nav' to={'/'}>
        HOME
      </Link>
      <Link className='nav' to={'/recursive'}>
        재귀 컴포넌트
      </Link>
      <Link className='nav' to={'/preorder'}>
        깊이 우선 순회(전위순회)
      </Link>
      <Link className='nav' to={'/inorder'}>
        깊이 우선 순회(중위순회)
      </Link>
      <Link className='nav' to={'/postorder'}>
        깊이 우선 순회(후위순회)
      </Link>
      <Link className='nav' to={'/comment'}>
        정적 댓글 트리
      </Link>
    </nav>
  );
}
