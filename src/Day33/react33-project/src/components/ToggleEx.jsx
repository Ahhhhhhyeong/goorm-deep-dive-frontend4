//토글 기능 만들어보기
import React, { useReducer } from 'react';

//처음 시작하는 상태값
const toggleInit = false;

/**
 * 따로 액션 객체가 없어도 사용 가능!
 * => 단순 반전만 시킴 (true/false)
 * @param {*} state : undefined 무시됨
 * @returns : 반전 된 상태
 * 주로
 * 모달 열기/닫기, 다크모드, 사이드바 토글
 */
function toggleReducer(state) {
  return !state;
}

export default function ToggleEx() {
  const [on, dispatch] = useReducer(toggleReducer, toggleInit);
  //한줄로도 가능
  const [isOpen, toggleModal] = useReducer((state) => !state, false);
  return (
    <div>
      <h2> 토글 기능 </h2>
      <button onClick={dispatch}>{on ? '켜짐' : '꺼짐'}</button>
      <p>한 줄로도 할 수 있음! 액션이 없어서 반전밖에 안됨. boolean 타입만 사용 가능함.</p>
      <button onClick={toggleModal}>{isOpen ? '열기' : '닫기'}</button>
    </div>
  );
}
