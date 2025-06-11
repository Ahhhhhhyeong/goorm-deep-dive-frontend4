import React from 'react';

export default function EventBubbling() {
  /** 화살표 함수
   * const 변수명 = 함수정의(함수를 만들어둠)
   * 변수에 함수를 집어넣음
   * const 를 사용하여 재정의가 되지 않음
   */
  const handleButtonClick = (e) => {
    e.stopPropagation(); //부모팝업 안뜨게
    alert('버튼 클릭');
  };
  const handleParentClick = () => {
    alert('부모');
  };

  return (
    <div onClick={handleParentClick}>
      <h1>버블링</h1>
      <button onClick={handleButtonClick}>클릭해보세용</button>
    </div>
  );
}
