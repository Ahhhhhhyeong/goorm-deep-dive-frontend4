import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todoSlice';

// 할 일 입력 UI
export default function TodoInput() {
  // 현재 입력 필드에 들어간 문자를 저장하는 상태
  //useState => TodoInput 컴포넌트 안에서만 데이터를 유지하고 관리함
  const [text, setText] = useState('');

  // Action을 store.js에 보내는 역할
  // 상태를 변경하거나 비동기 호출을 할 때 사용
  const dispatch = useDispatch();

  // 이벤트 설정
  const handleAdd = () => {
    //앞 뒤 공백 제거
    if (text.trim() === '') return; //빈문자xx

    /**액션에서 현재 입력값을 넘겨 호출하고
     * 그 결과로 만들어진 액션 객체를리덕스 스타터에 dispathe한디
     */
    dispatch(addTodo(text));

    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder='할 일을 입력하세요' />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}
