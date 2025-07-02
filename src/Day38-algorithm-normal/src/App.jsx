import REACT from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import TimeComplexity from './page/TimeComplexity';

function App() {
  return (
    <>
      <nav className='navi'>
        <Link to={'/question'}> 시간 복잡도 </Link>
        <Link to={'/question'}> 문제 풀이 </Link>
      </nav>

      <Routes>
        <Route path='/question' element={<TimeComplexity />} />
      </Routes>
    </>
  );
}

export default App;
