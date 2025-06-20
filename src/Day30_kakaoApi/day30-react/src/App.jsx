import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>카카오 로그인</h1>
      <Link to={'/kakaologin'}>카카오 로그인</Link>

      <h1>카카오 맵</h1>
      <Link to={'/kakaomap'}>카카오맵</Link>

      <h1>네이버 로그인</h1>
      <Link to={'/naverlogin'}>네이버 로그인</Link>
    </>
  );
}

export default App;
