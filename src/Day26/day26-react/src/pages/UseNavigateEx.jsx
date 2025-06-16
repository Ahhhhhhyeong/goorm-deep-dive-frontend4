import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function UseNavigateEx() {
  return <div>UseNavigateEx</div>;
}

/*

// 컴포넌트 (간단하게)
const Home = () => <h2>Home</h2>;
const Dashboard = () => <h2>DashBoard</h2>;

  //예시 : 로그인 성공 조건
  const loginSuccess = true;

  // 2. handelLogin 이벤트 실행
  const handelLogin = () => {
    // 코드를 작성해서 조건 true이면 페이지 이동
    // 3. 조건 확인
    if (loginSuccess) {
      // 4. 성공 시 alert
      alert('로그인 성공! 대시보드로 이동합니다.');
      // 5. navigate
      navigate('/dashboard');
    }
  };
      <button onClick={() => navigate('/home')}>Home</button>
      // 1. 버튼 클릭 시 
      <button onClick={handelLogin}>login 후 이동</button>
      // 뒤로 가기 
      <button onClick={() => navigate(-1)}>뒤로 가기</button>

      <Routes>
        <Route path='/' element={<UseNavigateEx />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
*/
