import React, { useState } from 'react';
import { useInputWithSearch } from '../../hooks/useInputWithSearch';

/*
onAddTask
 - 새로운 할일이 추가 될 때 호출될 함수
onSearch
 - 검색버튼이 클릭되거나 검색어가 변결 될 때 호출하는 함수
*/

export default function TeskInputWithSearch({ onAddTask, onSearch }) {
  const { inputValue, setInputValue, searchTerm, setSearchTerm, handleInputChange, resetInput, resetSearchTerm } =
    useInputWithSearch();

  const handleSearchClick = () => {
    onSearch(searchTerm); // 입력된 검색어를 부모로 전달
  };

  // Q 버튼 클릭하면 실행
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trimEnd()) {
      onAddTask(inputValue);
      resetInput();
      onSearch('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddSubmit} className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md'>
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Input'
            value={inputValue}
            onChange={handleInputChange}
            className='flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            aria-label='New task input'
          />
          <button
            type='button' // 폼 제출이 아닌 일반 버튼
            onClick={handleSearchClick}
            className='px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 font-bold'
            aria-label='Search tasks'>
            Q
          </button>
        </div>
        <button
          type='submit'
          className='w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400'>
          Add
        </button>
      </form>
    </div>
  );
}
