import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './components/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
