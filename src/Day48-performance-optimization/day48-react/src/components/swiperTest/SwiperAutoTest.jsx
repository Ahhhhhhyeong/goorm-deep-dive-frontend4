import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperAutoTest() {
  return (
    <div>
      <h1>Swiper - 슬라이드 자동 넘김</h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
        }}>
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
