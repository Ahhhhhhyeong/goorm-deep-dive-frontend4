import './App.css';
import TodoInput from './components/todo/TodoInput';
import TodoList from './components/todo/TodoList';

function App() {
  // UI 구성
  return (
    <>
      <h1>할 일 목록</h1>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
