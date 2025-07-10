import React, { useState } from 'react';
import { useTodoStore } from '../app/todoStore';

export default function TodoInput() {
  const [inputValue, setInputValue] = useState('');

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    //공백입력의 경우 return;
    if (!inputValue.trim()) return;

    //바로 저장소로 ㄱㄱ
    addTodo(inputValue);

    setInputValue('');
  };

  return (
    <div className='max-w-xl mx-auto mt-2 p-6 bg-white rounded-xl shadow space-y-6'>
      <h2 className='text-2xl font-bold '>📝 Todo 작성</h2>
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input
          type='text'
          placeholder='할 일을 입력하세요'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'>
          추가
        </button>
      </form>
    </div>
  );
}
