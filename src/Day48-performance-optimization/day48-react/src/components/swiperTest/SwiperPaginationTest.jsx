import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SwiperPaginationTest() {
  /*
  useRef?
  - swiper 인스턴스 (슬라이더 객체)를 직접 저장해서 제어하기 위해 useRef를 사용
  - DOM요소 또는 스와이퍼 객체, 즉 외부 객체를 다룰 때 사용
   */
  const swiperRef = useRef(null);

  return (
    <div>
      <h4>Swiper + 수동 제어(slideNext())</h4>

      <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)}>
        <SwiperSlide>
          <div style={{ backgroundColor: 'pink', padding: 50 }}>슬라이드1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: 'green', padding: 50 }}>슬라이드2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: 'blue', padding: 50 }}>슬라이드3</div>
        </SwiperSlide>
      </Swiper>
      <button onClick={() => swiperRef.current?.slideNext()}>👉다음슬라이드</button>
    </div>
  );
}
/*
실행순서
1. 컴포넌트 렌더링
2. 스와이퍼 컴포넌트 마운틑 
3. onSwiper 콜백 실행 -> swiper.current 인스턴스에 저장
4. 사용자가 버튼을 클릭
5. onClick event 발생
6. swiperRef.current.slideNext() 실행
7. swiper 내부 슬라이드가 이동(트랜지션 발생)
*/
