import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoPage from './page/TodoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
