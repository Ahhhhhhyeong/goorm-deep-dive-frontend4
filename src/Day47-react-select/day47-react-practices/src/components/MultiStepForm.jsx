import React from 'react';
import { components } from 'react-select';
import Step1 from './Step1_BasicInfo';
import Step2 from './Step2_ClubSelection';
import Step3 from './Step3_Introduction';
import Step4 from './Step4_Preview';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormStore } from '../stores/formStroe';
import MultiStepNav from './MultiStepNav';

const steps = [
  { components: Step1, label: '❶ 기본정보' },
  { components: Step2, label: '❷ 희망 동아리' },
  { components: Step3, label: '❸ 자기소개' },
  { components: Step4, label: '' },
];

export default function MultiStepForm() {
  const methods = useForm();
  const { currentStep, nextStep, prevStep, formData, setFormData } = useFormStore();

  // 현재 단계 컴포넌트
  const CurrentComponent = steps[currentStep].components;

  const onSubmit = (data) => {
    setFormData(data);

    if (currentStep < steps.length - 1) {
      console.log(JSON.stringify(formData, null, 2));
      nextStep();
    } else {
      //마지막 단계
      console.log(JSON.stringify(formData, null, 2));
      alert('제출 완료');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='p-6 max-w-lg mx-auto bg-white shadow space-y-4 mt-8'>
        <h1 className='text-4xl font-bold '>동아리 가입 신청 폼</h1>
        <nav className='flex space-x-4 mb-6'>
          {steps.map((step, idx) => (
            <MultiStepNav key={idx} isCurrent={currentStep === idx}>
              {step.label}
            </MultiStepNav>
          ))}
        </nav>

        <CurrentComponent />

        <div className='flex justify-between'>
          {currentStep > 0 && (
            <button type='button' onClick={prevStep} className='px-4 py-2 bg-gray-300 rounded'>
              이전
            </button>
          )}
          <button type='submit' className='px-12 py-2 bg-rose-600 text-white rounded ml-auto'>
            {currentStep === steps.length - 1 ? '제출' : '다음'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
