import { useState } from 'react';
import './App.css';
import TodoApp from './pages/TodoApp';
import TeskApp from './pages/TeskApp';

function App() {
  return (
    <>
      <h2>통합 테스트</h2>
      <TodoApp />
      <TeskApp />
    </>
  );
}

export default App;
