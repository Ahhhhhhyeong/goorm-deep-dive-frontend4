import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import SortAlgoPage from './page/SortAlgoPage';
import AlgorithmQuestionPage from './page/AlgorithmQuestionPage';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question10 from './components/Question10';
import Question8 from './components/Question8';

function App() {
  return (
    <>
      <nav className='navi'>
        <Link to={'/sort'}>정렬알아보기</Link>
        <Link to={'/question'}>문제풀어보기</Link>
      </nav>

      <Routes>
        <Route path='/sort' element={<SortAlgoPage />} />
        <Route path='/question' element={<AlgorithmQuestionPage />}>
          <Route index element={<Question1 />} />
          <Route path='question1' element={<Question1 />} />
          <Route path='question2' element={<Question2 />} />
          <Route path='question3' element={<Question3 />} />
          <Route path='question4' element={<Question4 />} />
          <Route path='question8' element={<Question8 />} />
          <Route path='question10' element={<Question10 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
