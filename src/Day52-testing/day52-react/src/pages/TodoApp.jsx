//  TodoApp
//  할일 목록 간단하게 관리할 수있는 기능을 제공한다
import React, { useState } from 'react';
import { useTodo } from '../hooks/useTodo';

export default function TodoApp() {
  const { input, setInput, todos, addTodo, toggleTodo } = useTodo();

  return (
    <div>
      <input placeholder='할 일을 입력하세요' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} onClick={() => toggleTodo(idx)} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
