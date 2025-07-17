import { throttle } from 'lodash';
import React, { useEffect } from 'react';

// lodash 라이브러리 사용!
export default function ThorttlingTest1() {
  //Throttling 스크롤 예제(사용 한 경우)
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('스크롤 이벤트 발셍: ', window.scrollY);
    }, 800);

    window.addEventListener('scroll', handleScroll);

    //이벤트 정리
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //Throttling 스크롤 예제(사용 안 한 경우)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log('스크롤 이벤트 발셍: ', window.scrollY);
  //   };

  //   //마우스가 브라우저에서 움직일 때마다 이벤트를 발생
  //   window.addEventListener('scroll', handleScroll);
  // }, []);
  return (
    <div>
      {/* 스크롤 로그 제한 */}
      <h3>Throttling 스크롤 예제</h3>
      <p>아래로 스크롤 해보세요! 로그가 1초에 한 번만 찍힙니다.</p>

      <div
        style={{
          height: '200vh',
          backgroundColor: 'cyan',
        }}></div>
    </div>
  );
}

/**
 Thorttling 이란?
 - 일정 시간마다 한 번씩만 실행되게 제한하는 기법
 - 반복되는 이벤트 중 정해진 시간마다 한 번만 실행한다

 왜 사용?
 - 초당 수십 번 발생하는 이벤트(스크롤, 마우스 이동 등)를 일정 간격으로 제한해 
 브라우저 렌더링/성능 최적화하기 위해 사용


 Thorttling을 안쓰는 경우
 - 한 번만 마우스를 움직여도 수십 ~ 수백번의 로그가 찍힌다
 - cpu 상태 점유가 높아지고, 리액트 렌더링이 늘어난다!
  - 모바일로 가게되면 전력소모가 심해짐!!

 */
