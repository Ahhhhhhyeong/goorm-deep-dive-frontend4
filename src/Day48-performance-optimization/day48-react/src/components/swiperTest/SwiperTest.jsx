import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperTest() {
  return (
    <div>
      <h1>Swiper 실습 - 1</h1>
      <Swiper>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: 'aqua',
              padding: 30,
            }}>
            슬라이드 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: 'pink',
              padding: 30,
            }}>
            슬라이드 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: 'greenyellow',
              padding: 30,
            }}>
            슬라이드 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

/*
슬라이더 형 UI 컴포넌트 라이브러리
- 이미지 슬라이더, 다단계 폼, 캐러셀 등을 화면만들 때 사용하는 도구
- 외부 라이브러리
```
  npm install swiper
```
- **swiper/react 라이브러리에서 꼭 포함해야한다**

 <Swiper> 전체 슬라이드를 감싸는 부모 컴포넌트가 하나 필요하다
 <SwiperSlide spaceBetween={여백}>  각각의 슬라이드(페이지 하나)
 
 속성값
 spaceBetween={여백}  슬라이드 간의 여백(px)
 slidesPerView={1} 한 화면에 보여줄 슬라이드 수

 제일 중요한 것은 swiper.css 를 꼭! 포함하기 안하면 작동 안됨....
*/
