import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import BigO from './big-o/BigO';
import BigO1 from './Components/BigO1';
import BigOn from './Components/BigOn';
import QuestionPage from './questions/QuestionPage';
import Question1 from './questions/Question1';
import BigOn2 from './Components/BigOn2';
import Question2 from './questions/Question2';
import TimeComplextiy from './Components/TimeComplextiy';

function App() {
  return (
    <>
      <nav className='navi'>
        <Link to='/bigo'>빅오표기</Link>
        <Link to='/timecomplextiy'>시간복잡도</Link>
        <Link to='/question'>문제풀이</Link>
      </nav>

      <Routes>
        <Route path='/bigo' element={<BigO />}>
          <Route index element={<BigO1 />} />
          <Route path='bigo1' element={<BigO1 />} />
          <Route path='bigon' element={<BigOn />} />
          <Route path='bigon2' element={<BigOn2 />} />
        </Route>
        <Route path='/timecomplextiy' element={<TimeComplextiy />} />
        <Route path='/question' element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
