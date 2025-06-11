import React from 'react';

export default function EventDelegationEx() {
  const handleClick = (e) => {
    // 아이템 리스트를 눌렀는지 체크(LI)
    /* if (e.target.tagName === 'LI') { 
        console.log(e.target);
        console.log(e.target.tagName);
      }
    - 이 방식은 LI 가 아닌 li가 나타날 수도 있다(안전성이 낮음)
    - 오타가 날 수도 있으니 
      closest(), matchs(), dataset 사용해서 조금 더 안정적으로 사용 가능 
     */

    const li = e.target.closest('li');
    if (li) {
      alert('선택 : ' + li.textContent);
    }
  };
  return (
    <div>
      <h1>이벤트 위임</h1>
      <ul onClick={handleClick}>
        <li>사과</li>
        <li>복숭아</li>
        <li>바나나</li>
      </ul>
    </div>
  );
}
