import React, { useEffect } from 'react';

export default function useEffectEx() {
  /*
  //처음 한 번만 실행
  useEffect(() => {
    console.log('first loading');
  }, []);
  */
  // 2초뒤에 알림 생성
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('2초 지남');
      //alert보다 toast나 머트리얼 ui를 많이 사용함
    }, 2000);
  }, []);

  return (
    <div className='box'>
      <p>긴급! 2초 뒤 할인이 중단됩니다!</p>
    </div>
  );
}
