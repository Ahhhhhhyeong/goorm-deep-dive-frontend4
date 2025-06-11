import React from 'react';

export default function EventDelegationEx() {
  const handleClick = (e) => {
    // 아이템 리스트를 눌렀는지 체크(LI)
    if (e.target.tagName === 'LI') {
      console.log(e.target);
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
