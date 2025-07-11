import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardForm from './components/posts/BoardForm';
import BoardList from './components/posts/BoardList';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<BoardForm />} /> */}
        <Route path='/' element={<BoardList />} />
      </Routes>
    </>
  );
}

export default App;
