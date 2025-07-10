import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, removeTodo } from '../../features/todos/todoSlice';

export default function TodoList() {
  /** useSelector()
   * - 전역 상태(store)에서 필요한 데이터를 꺼내는 Hook
   */
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // 화면이 처음 보여질 때, todoslist가 업데이트 될 때마다 실행
  useEffect(() => {
    console.log('useEffect()');
    dispatch(getTodos());
    // console.log('투두리스트페이지: ', todos);
  }, [dispatch]);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>데이터를 가지고 오는데에 문제가 생겼습니다. 에러 메시지 : {error}</p>;
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {'  '}
            <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** 삭제 구현
 * - dispatch를 이용해서 이벤트 발생시 실행!
 */
