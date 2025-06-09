import React from 'react';
/*
  names의 정보는 App이 가지고 있다
  중복되는 코드들이 있기 때문에 Greeting(컴포넌트)을 만들었다!

  App과 Greeting 컴포넌트들끼리 데이터를 주고 받기 위해 => props 사용(파라메터!)
*/
export default function Greeting({ name }) {
  return (
    <>
      <h1>안녕하세요! {name}님!</h1>
    </>
  );
}
