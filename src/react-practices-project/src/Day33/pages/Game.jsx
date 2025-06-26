import React, { useReducer, useState } from 'react';
import LevelUp from '../components/LevelUp';

const nameInitState = [];
function nameReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.value];
    case 'DELETE':
      return state.filter((_, index) => index !== action.value);
    default:
      return state;
  }
}
export default function Game() {
  const [inputValue, setInputValue] = useState('');
  const [names, nameDispatch] = useReducer(nameReducer, nameInitState);

  const handleAddName = (e) => {
    if (inputValue.trim() !== '') {
      nameDispatch({ type: 'ADD', value: inputValue });
      setInputValue('');
    }
  };

  return (
    <>
      <div className='s-full bg-white flex flex-col rounded-lg p-4'>
        <h1 className='text-xl font-bold m-4 text-center'>game 시작 전, 캐릭터 등록</h1>
        <p className='text-sm text-zinc-400 text-center mb-4'>입장 명단 관리 시스템</p>
        <input
          className='border-1 border-zinc-500 rounded-sm'
          type='text'
          name='name'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='bg-blue-400 text-white mt-1 py-1 rounded-sm' onClick={handleAddName}>
          추가
        </button>
        <div className='w-full h-100 overflow-y-scroll overflow-hidden whitespace-nowrap scroll-smooth border-1 border-zinc-400 flex flex-col rounded-lg my-3'>
          {names.map((name, index) => (
            <div className='text-center' key={index}>
              <span className='text-xl'>{name}</span>
              <button
                onClick={() => nameDispatch({ type: 'DELETE', value: index })}
                className='w-10 border-1 border-blue-300 h-7 m-4 font-bold text-sm text-red-600 rounded-lg hover:bg-blue-200'>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      {names.length > 0 ? <LevelUp /> : <></>}
    </>
  );
}
