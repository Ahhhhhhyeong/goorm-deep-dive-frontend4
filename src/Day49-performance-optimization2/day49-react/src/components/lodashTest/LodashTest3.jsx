import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';

export default function LodashTest3() {
  /*
  window.innerWidth; 
  - 브라우저 창(viewport)의 가로 너비를 픽셀 단위로 반환하는 읽기 전용
  */
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setSize(window.innerWidth);
    }, 500);

    //브라우저 창이 변경 될 때마다 이벤트를 실행을 할 수 있도록
    window.addEventListener('resize', handleResize);

    //컴포넌트가 사라질 때(unmount) 이벤트 리스너도 제거 => 메모리 누수 방지를 위한 습관
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <h3>창 크기 변경(resize)</h3>
      <p>창 크기를 바꾸고 0.5초 기다려보세요!</p>
      <p>⚒️ 창 너비 : {size}px</p>
    </div>
  );
}
/*
언마운트를 해서 컴포넌트가 사라질 때 이벤트를 삭제하는 것으로 성능을 최적화 하는 중요한 코드다.
  -> 창의 크기가 바뀔 때 마다 실시간으로 업데이트하면 불필요한 렌더링이 많이 발생한다. 
  -> 디바운스 + 언마운트(삭제) 같이 사용하면 실무에서도 유용하게 사용 가능하다.
*/
