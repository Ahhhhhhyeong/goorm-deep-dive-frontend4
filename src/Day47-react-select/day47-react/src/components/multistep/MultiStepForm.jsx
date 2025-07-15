import React from 'react';

// 1. 각 컴포넌트들을 import 해야됨
import Step1 from './Step1_BasicInfo';
import Step2 from './Step2_Department';
import Step3 from './Step3_Experience';
import Step4 from './Step4_Introduce';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStore } from '../../stores/formStore';

// 2. 단계별로 컴포넌트 배열
const steps = [Step1, Step2, Step3, Step4];

export default function MultiStepForm() {
  //3. 리액트 훅 폼 초기화
  const methods = useForm();

  //5. 쥬드텐드의 저장소에서 함수,상태값을 이용할 수있도록 저장소 가져오기
  const { currentStep, nextStep, prevStep, formData, setFormData } = useFormStore();

  const CurrentComponent = steps[currentStep];

  //7.폼 이벤트 함수 작성
  /**
   다음 버튼을 클릭하면 : 다음으로 이동
   제출 버튼을 클릭하면 : 입력한 데이터를 저장, alert()창을 이용해서 보여주기
   */
  const onSubmit = (data) => {
    console.log(`버튼 눌림! 현재 데이터: `, JSON.stringify(data, null, 2));
    // 7-1. 현재 단계에서 입력한 데이터 저장
    setFormData(data);

    // 7-2. 다음을 누르면 다음 컴포넌트 이동
    if (currentStep < steps.length - 1) {
      nextStep();
    } else {
      //마지막 단계 = 제출
      console.log('최종 제출 값: ', JSON.stringify(data, null, 2));
      alert('제출 완료');
    }
  };

  // 4. 하위 컴포넌트들에서 useFormContext() 로 값 공유해서 사용하게 만들겠다
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='p-6 max-w-md mx-auto bg-white shadow space-y-4 mt-8'>
        {/* 6. 현재 단계의 컴포넌트 렌더링  */}
        <CurrentComponent />

        {/* 이전,다음,제출 컴포넌트 버튼  */}
        <div className='flex justify-between'>
          {currentStep > 0 && (
            <button type='button' onClick={prevStep} className='px-4 py-2 bg-gray-300 rounded'>
              이전
            </button>
          )}
          <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded'>
            {currentStep === steps.length - 1 ? '제출' : '다음'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
