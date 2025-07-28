import React from 'react';

//clx를 사용하지 않았을 때
export default function Button({ primary, disabled = false, rounded }) {
  let className = 'btn'; // 기본적인 클래스명을 먼저 할당

  return (
    <>
      <button>clx사용하지 않은 버튼</button>
    </>
  );
}
