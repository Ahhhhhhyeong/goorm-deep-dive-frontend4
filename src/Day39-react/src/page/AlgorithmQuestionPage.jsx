import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function AlgorithmQuestionPage() {
  return (
    <div>
      <h1>알고리즘 문제 풀기</h1>
      <nav className='navi'>
        <Link to={'question1'}>1번 문제</Link>
        <Link to={'question2'}>2번 문제</Link>
        <Link to={'question3'}>3번 문제</Link>
        <Link to={'question4'}>4번 문제</Link>
      </nav>
      <Outlet />
    </div>
  );
}
