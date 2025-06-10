import { useState } from 'react';

export default function UseMouseEvent() {
  /* object를 사용할 때 
   마우스를 움직이면 빨간 점이 따라다니는 예제
    - 실시간으로 좌표를 업데이트해서 빨간점을 이동할 수 있는 transform 이용!
  */
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <>
      {/* 마우스를 움직일 때 전체 영역 설정 
        onPointerMove : 마우스 움직임 이벤트
      */}
      <div
        onPointerMove={(e) => {
          console.log(e.clientX, e.clientY);
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'pink',
        }}>
        첫번째 박스
      </div>

      {/* 빨간 점 */}
      <div
        style={{
          position: 'absolute',
          background: 'red',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          // 마우스를 기준으로 위치
          top: 0,
          left: 0,
          // 이동: transform
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}></div>
    </>
  );
}

//간혹 useState() 자동으로 포함할 때 import 가 자동으로 안되는 경우가 있으니 잘 확인하기!
