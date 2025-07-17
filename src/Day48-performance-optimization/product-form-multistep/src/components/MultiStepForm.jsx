import React, { useRef, useState } from 'react';
import Step1 from './product-step/Step1_ProductInfo';
import Step2 from './product-step/Step2_CategoryImages';
import Step3 from './product-step/Step3_StockOption';
import Step4 from './product-step/Step4_Preview';
import { FormProvider, useForm } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useProductStore } from '../stores/productStore';

const steps = [
  { component: Step1, label: '❶ 상품정보' },
  { component: Step2, label: '❷ 희망부서' },
  { component: Step3, label: '❸ 경력유무' },
  { component: Step4, label: '❹ 자기소개' },
];

export default function MultiStepForm() {
  const methods = useForm({
    mode: 'noChange',
    defaultValues: {
      // 필드별 기본값 설정
      prdname: '',
      price: '',
    },
  });
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { productData, setPrdData } = useProductStore();

  // onSubmit 함수
  const onSubmit = (data) => {
    // console.log('Form submitted with data:', data);
    setPrdData(data);
    if (currentIndex === steps.length - 1) {
      // 마지막 단계 - 최종 제출
      console.log('Final submission:', data);
      alert('제출 완료!');
    } else {
      // 다음 단계로 이동
      swiperRef.current?.slideNext();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Swiper 사용 */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          allowTouchMove={false}>
          {/* 슬라이드는 동적으로 불러오도록 설정 */}
          {steps.map((step, idx) => {
            const StepComponent = step.component;
            return (
              <SwiperSlide key={idx}>
                <StepComponent />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 페이지 이동 버튼 */}
        <div className='flex justify-center-safe item-center gap-2'>
          {/* 이전 버튼 영역 */}
          {/* {currentIndex > 0 && (
          )} */}
          <button
            type='button'
            onClick={() => swiperRef.current?.slidePrev()}
            className='px-6 py-2 bg-gray-400 hover:bg-gray-600 text-white rounded-lg transition-colors'>
            Prev
          </button>
          {/* 다음/제출 버튼 영역 */}
          <button
            type='submit' //위치가 중요함.. form에 있어야 submit이 됨...
            className='px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors'>
            {currentIndex === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
