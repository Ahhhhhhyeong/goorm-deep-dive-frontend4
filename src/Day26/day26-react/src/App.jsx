import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import UseNavigateEx from './pages/UseNavigateEx';
import Mypage from './pages/Mypage';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import PromiseEx from './pages/PromiseEx';
import AsynsEx from './pages/AsynsEx';
import MovieView from './pages/MovieView';

function App() {
  /** 1. 컴포넌트 함수의 최상단에서만 호출해야 정상적으로 작동한다.
   * 페이지를 자동으로 이동하기 위해서 사용하는 것
   * 변수명을 자유롭게 변경할 수 있다.(하지만 팀원들이 햇갈릴 수 있음)
   *  => 가독성이 떨어짐. 협업에 방해가 될 수 있음
   *  => navigate : useNavigate() 변수명
   */
  const navigate = useNavigate();

  return (
    <>
      {/* 중첩 라우터 : Route 안에 Route
        자식 페이지는 왜 '/'를 추가 안하는지? 
          -> /를 추가하면 부모를 무시하고 단독 페이지가 된다.
          -> 중첩 라우터를 사용하는 경우 무조건 상대경로를 이용해서 사용을 하고, /mypage(상위페이지)에서 자동으로 /를 붙여줌
      */}
      <h2>실습 페이지 이동</h2>
      <nav>
        <Link to='/mypage'>중첩 라우터</Link> <br />
        <Link to='/promiseex'>동기 예제1 - Promise</Link> <br />
        <Link to='/asyncex'>동기 예제2 - async & await</Link> <br />
        <Link to='/movieview'>영화 리스트 api 호출</Link>
      </nav>
      <Routes>
        <Route path='/mypage' element={<Mypage />}>
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='/promiseex' element={<PromiseEx />} />
        <Route path='/asyncex' element={<AsynsEx />} />
        <Route path='/movieview' element={<MovieView />} />
      </Routes>
    </>
  );
}

export default App;

/**
 function App() {
  /** 1. 컴포넌트 함수의 최상단에서만 호출해야 정상적으로 작동한다.
   * 페이지를 자동으로 이동하기 위해서 사용하는 것
   * 변수명을 자유롭게 변경할 수 있다.(하지만 팀원들이 햇갈릴 수 있음)
   *  => 가독성이 떨어짐. 협업에 방해가 될 수 있음
   *  => navigate : useNavigate() 변수명
   
  const navigate = useNavigate();

  return (
    <>
      <h4>마이페이지 - 프로필 - 설정</h4>
      {/* 중첩 라우터 : Route 안에 Route
        자식 페이지는 왜 '/'를 추가 안하는지? 
          -> /를 추가하면 부모를 무시하고 단독 페이지가 된다.
          -> 중첩 라우터를 사용하는 경우 무조건 상대경로를 이용해서 사용을 하고, /mypage(상위페이지)에서 자동으로 /를 붙여줌
      
      <Routes>
        <Route path='/mypage' element={<Mypage />}>
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
 */
