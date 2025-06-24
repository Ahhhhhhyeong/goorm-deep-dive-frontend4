import React, { useEffect, useRef } from 'react';

export default function FocusInput() {
  // 태그를 선택 전!
  // DOM을 참조할 변수를 만든다.
  const inputRef = useRef(null);

  // 한번만 실행해라! (마운트)
  // 자동으로 커서를 input창에서 포커스맞추기!
  /*
  TypeError: Cannot read properties of null (reading 'focus')
  위에 에러는 input태그와 useRef가 연결이 안되어있을 때 나타는 에러다!

  
  Optional Chaining(?.)
   왼쪽에 있는 데이터가 null 이거나 undefined 일 때 즉시 
   값을 반환하고 그렇지 않으면 ?.뒤에 있는 내용을 실행한다
  */
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFoucs = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h1>FocusInput</h1>
      <h4>useRef 기본예제 : 입력창 자동 포커스</h4>
      {/* ex, 검색창에 포커스 자동 이동 */}
      <input ref={inputRef} type='text' placeholder='여기를 클릭없이 자동으로 포커스' />
      <button onClick={handleFoucs}>클릭!</button>
    </div>
  );
}
