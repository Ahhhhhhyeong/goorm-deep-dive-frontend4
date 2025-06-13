import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Stack gap={2} className='col-md-4 mx-auto'>
      <h1>React Router 실습</h1>
      {/* url path */}
      <nav>
        <Link className='nav-item' to='/'>
          Home
        </Link>
        <Link className='nav-item' to='/about'>
          About
        </Link>
        <Link className='nav-item' to='/posts'>
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </Stack>
  );
}

export default App;
