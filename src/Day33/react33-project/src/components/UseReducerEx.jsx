//Reducer 실습
import React, { useReducer } from 'react';

/**
 *
 * @param {*} state : 현재 form 상태
 * @param {*} action : 어떠한 값의 수정 요청
 * @returns
 */
function reducer(state, action) {
  return {
    ...state,
    [action.filed]: action.value,
  };
}

export default function UseReducerEx() {
  const initState = {
    name: '',
    age: '',
    email: '',
  };

  const [form, dispatch] = useReducer(reducer, initState);

  /* 어떤 입력항이든 onChange 이벤트가 발생하면 상태를 업데이트 하는 함수
    dispatch: 해당 필드를 업데이트 하도록 액션을 전달
    field : 태그를 구별하는 name 속성
    value : 실제 사용자가 입력한 값
  */
  const handleChange = (e) => {
    dispatch({
      filed: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <input type='text' name='name' placeholder='이름을 입력해주세요' onChange={handleChange} />
      <input type='text' name='email' placeholder='이메일을 입력해주세요' onChange={handleChange} />
      <input type='text' name='age' placeholder='나이를 입력해주세요' onChange={handleChange} />
    </div>
  );
}
