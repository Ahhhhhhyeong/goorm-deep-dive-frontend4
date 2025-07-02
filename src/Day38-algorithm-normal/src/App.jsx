import REACT from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import TimeComplexity from './page/TimeComplexity';
import QuestionPage from './page/QuestionPage';

function App() {
  return (
    <>
      <nav className='navi'>
        <Link to={'/bigo'}> 시간 복잡도 </Link>
        <Link to={'/question'}> 문제 풀이 </Link>
      </nav>

      <Routes>
        <Route path='/bigo' element={<TimeComplexity />} />
        <Route path='/question' element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
