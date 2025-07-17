import React from 'react';
// 컴포넌트 파일 상단에 추가
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperPagenation() {
  return (
    <div>
      <h1>페이지 네이션</h1>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }} //점을 클릭하면 이동할 수 있게 설정
      >
        <SwiperSlide>
          <div style={{ backgroundColor: 'aqua', padding: 30 }}>슬라이드 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: 'pink', padding: 30 }}>슬라이드 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: 'greenyellow', padding: 30 }}>슬라이드 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
