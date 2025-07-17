import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperNavigationTest() {
  return (
    <div>
      <h2>네비게이션</h2>
      <Swiper modules={[Navigation]} navigation>
        <SwiperSlide>
          <div style={{ backgroundColor: 'yellow', padding: 30 }}>슬라이드 1</div>
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
