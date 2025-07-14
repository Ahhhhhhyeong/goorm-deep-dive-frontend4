import React, { useRef } from 'react';

export default function UnControlledEx() {
  const inputRef = useRef();
  const handleClick = () => {
    alert(inputRef.current.value);
  };
  return (
    <div>
      <h3>UnControlled 방식</h3>
      <input type='text' placeholder='이름을 입력' ref={inputRef} />
      <button onClick={handleClick}>출력</button>
    </div>
  );
}
