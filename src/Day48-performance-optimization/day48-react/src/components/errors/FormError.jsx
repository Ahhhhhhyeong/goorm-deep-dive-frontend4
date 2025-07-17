import React from 'react';

/* 
에러들만 관리하는 컴포넌트를 따로 만들어서 관리
공통 에러를 처리하는 메시지 컴포넌트로 사용
*/
export default function FormError({ message }) {
  if (!message) return null;

  return <p style={{ color: 'red' }}>{message}</p>;
}
