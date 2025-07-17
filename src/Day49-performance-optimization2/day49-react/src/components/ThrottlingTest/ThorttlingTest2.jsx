import { throttle } from 'lodash';
import React from 'react';

export default function ThorttlingTest2() {
  //버튼을 미친듯이 많이 눌렸을 때, 처음 알림창 다음 2초의 간격을 두고 한 번만 알림창이 뜸
  const handleclick = throttle(() => {
    alert('😈 클릭됨~');
    // console.log('😈 클릭됨~');
  }, 2000);

  return (
    <div>
      <h2>버튼 click Throttle</h2>
      <button onClick={handleclick}>2초에 1번씩 반응하는 버튼</button>
    </div>
  );
}
