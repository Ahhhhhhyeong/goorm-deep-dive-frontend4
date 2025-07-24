// 커스텀 훅을 만들어 사용하기
import React, { useState } from 'react';

export function useTodo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const updated = todos.map((todo, i) => (i === index ? { ...todo, done: !todo.done } : todo));
    setTodos(updated);
  };

  return { input, setInput, todos, setTodos, addTodo, toggleTodo };
}
