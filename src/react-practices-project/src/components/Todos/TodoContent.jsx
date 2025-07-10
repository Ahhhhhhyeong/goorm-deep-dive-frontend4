import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doneTodo, getTodos, removeTodo } from '../../features/todos/todoSlice';

export default function TodoContent({ filter }) {
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const [pageNum, setPageNum] = useState(0);
  console.log(useSelector((state) => state.todos));

  const dispatch = useDispatch();
  // 화면이 처음 보여질 때, todoslist가 업데이트 될 때마다 실행
  useEffect(() => {
    console.log('useEffect()');
    dispatch(getTodos());
  }, [dispatch]);

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'complete') return todo.completed;
      return true; // all
    })
    .slice(pageNum, pageNum + 10);
  const pagenationTodos = todos.length / 10;

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>데이터를 가지고 오는데에 문제가 생겼습니다. 에러 메시지 : {error}</p>;
  }
  if (!todos || todos.length === 0) return <p>할 일이 없습니다</p>;

  return (
    <div>
      <ul className='mt-4'>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className='flex items-center border-b-2 border-zinc-300 py-1'>
            <input
              type='checkbox'
              name='todoIsComplete'
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => dispatch(doneTodo(todo.id))}
              className='mr-3 flex-shrink-0'
            />
            <span className='flex-grow text-left'>{todo.title}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className='w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition flex-shrink-0'>
              X
            </button>
          </li>
        ))}
      </ul>
      {/* {pagenationTodos !== 0 && (
        <ol>
          
        </ol>
      )} */}
    </div>
  );
}
