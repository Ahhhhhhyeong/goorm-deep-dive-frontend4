import { useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Lesson from './pages/Lesson';
import Question from './pages/Question';

function App() {
  return (
    <>
      <nav className='navi'>
        <Link to={'/lesson'}>수업 내용</Link>
        <Link to={'/question'}>알고리즘 문제</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Lesson />} />
        <Route path='/lesson' element={<Lesson />} />
        <Route path='/question' element={<Question />}></Route>
      </Routes>
    </>
  );
}

export default App;
