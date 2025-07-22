import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ToggleMessage from './components/ToggleMessage';
import LoginForm from './components/LoginForm';
import TodoForm from './components/TodoForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToggleMessage />
      <LoginForm />
      <TodoForm />
    </>
  );
}

export default App;
