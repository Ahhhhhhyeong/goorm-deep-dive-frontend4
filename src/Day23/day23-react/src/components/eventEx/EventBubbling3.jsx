import React from 'react';

export default function EventBubbling3() {
  const handleClick = (e) => {
    e.preventDefault();
    alert('링크 이동 막기!');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 자동제출 막기
    alert('폼 제출 전 유효성 검사');
  };

  return (
    <div>
      <h1>기본 동작막기</h1>
      <a
        href='https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault'
        onClick={handleClick}>
        mdn 이동
      </a>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <input type='submit' value='제출' />
      </form>
    </div>
  );
}
/* 
error Uncaught Error: input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`. 

<form onSubmit={handleSubmit}>
  <input type='text' />
  <input type='submit'>제출</input>
</form>

* void(비어있다 또는 없다 반환되는타입이 없다)라는 뜻
* input태그는 void element (빈 요소) 이기 때문에 </input> 닫는 태그를 쓰면 안된다 또 내용을 넣고 싶다면 value 속성을 이용해야된다.
* 아님 <label for=~ />을 사용하여 준다:)
*/
