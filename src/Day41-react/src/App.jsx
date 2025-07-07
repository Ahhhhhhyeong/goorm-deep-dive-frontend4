import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HashPages from './pages/HashPages';
import HashTest1 from './components/hashTest/hashTest1';
import HashTest2 from './components/hashTest/HashTest2';
import HashPassword from './components/hashTest/HashPassword';
import Programmers from './pages/Programmers';
import WhoDidNotFinished from './components/Programmers/WhoDidNotFinished';
import BestAlbums from './components/Programmers/BestAlbums';
import CosPro from './pages/CosPro';
import Question7 from './components/Question/Question7';
import HashPasswordSHA from './components/hashTest/HashPasswordSHA';
import Question8 from './components/Question/Question8';
import AlgoCosproPage from './pages/AlgoCosproPage';

function App() {
  return (
    <>
      <nav className='navi'>
        <Link to='/'>수업 실습</Link>
        <Link to={'/cos'}>Cos Pro</Link>
        <Link to={'/programmers'}>프로그래머스 문제 풀이</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HashPages />}>
          <Route path='hash1' element={<HashTest1 />} />
          <Route path='hash2' element={<HashTest2 />} />
          <Route path='hash3' element={<HashPassword />} />
          <Route path='hash4' element={<HashPasswordSHA />} />
        </Route>
        <Route path='/programmers' element={<Programmers />}>
          <Route path='prob1' element={<WhoDidNotFinished />} />
          <Route path='prob2' element={<BestAlbums />} />
        </Route>
        <Route path='/cos' element={<CosPro />}>
          <Route path='question7' element={<Question7 />} />
          <Route path='question8' element={<Question8 />} />
          <Route path='question1' element={<AlgoCosproPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
