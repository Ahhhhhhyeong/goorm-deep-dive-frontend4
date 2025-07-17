import React, { useState } from 'react';

export default function LodashTest3() {
  const [size, setSize] = useState(window.innerWidth);
  return (
    <div>
      <h3>창 크기 변경(resize)</h3>
    </div>
  );
}
/*
window.innerWidth; 
- 브라우저 창(viewport)의 가로 너비를 픽셀 단위로 반환하는 읽기 전용

*/
