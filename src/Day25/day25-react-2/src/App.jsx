import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <h1>실습</h1>
      <nav>
        <Link className='nav-item' to='/'>
          Home
        </Link>
        <Link className='nav-item' to='/product'>
          상품보기
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
