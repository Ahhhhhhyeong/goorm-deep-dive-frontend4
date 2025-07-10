import React from 'react';
import { useTodoStore } from '../app/todoStore';

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div className='max-w-xl mx-auto mt-2 p-6 bg-white rounded-xl shadow space-y-6'>
      <ul className='space-y-2 mt-4'>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='flex items-center justify-between p-4 bg-white rounded-md shadow border border-red-200'>
            <span className='text-gray-800'>{todo.title}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className='px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors'>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
