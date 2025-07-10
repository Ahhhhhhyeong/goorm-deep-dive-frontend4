import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todoSlice';

export default function TodoInput() {
  const [inputTodo, setInputTodo] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputTodo.trim() === '') return;
    const newTodo = { completed: false, id: Date.now(), title: inputTodo.trim(), userId: 1 };
    dispatch(addTodo(newTodo));
    setInputTodo('');
  };

  return (
    <div className='flex items-center justify-center my-4 space-x-2'>
      <input
        type='text'
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder='할 일을 입력하세요.'
        className='flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
      />
      <button
        onClick={() => handleAdd()}
        className='bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition'>
        추가하기
      </button>
    </div>
  );
}
