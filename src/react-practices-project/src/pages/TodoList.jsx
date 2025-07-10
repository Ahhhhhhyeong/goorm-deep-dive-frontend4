import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import TodoInput from '../components/Todos/TodoInput';

//탭페이지 생성
export default function TodoList() {
  return (
    <div className='bg-white m-auto flex justify-center align-center p-10 rounded-lg '>
      {/* tab 생성 */}
      <div className='w-180'>
        <nav className='flex px-4 py-1 justify-between'>
          <NavLink
            to=''
            end
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-indigo-500 font-bold text-indigo-600 pb-1' : 'text-gray-500 pb-1'
            }>
            All
          </NavLink>

          <NavLink
            to='active'
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-indigo-500 font-bold text-indigo-600 pb-1' : 'text-gray-500 pb-1'
            }>
            Active
          </NavLink>

          <NavLink
            to='complete'
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-indigo-500 font-bold text-indigo-600 pb-1' : 'text-gray-500 pb-1'
            }>
            Complete
          </NavLink>
        </nav>
        <TodoInput />
        <Outlet />
      </div>
    </div>
  );
}
