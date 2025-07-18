import React, { useEffect, useState } from 'react';

// 화면 크기 (브라우저 창 크기)를 실시간으로 감지하고
// 그 값을 컴포넌트에서 사용할 수있게 해주는 실무에서 자주
// 사용하는 커스텀 훅이다!
export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

/**
 모바일, 태블릿, PC 구별할 때 주로 쓰임
 */
