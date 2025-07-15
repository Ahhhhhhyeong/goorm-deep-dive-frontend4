import { create } from 'zustand';

//zustand 이용해서 저장소 제작
export const useFormStore = create((set) => ({
  formData: {},
  currentStep: 0,
  //입력값 저장 함수
  setFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  // 다음단계로 이동
  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),
  // 이전단계로 이동
  prevStep: () =>
    set((state) => ({
      currentStep: state.currentStep - 1,
    })),
}));

//각 단계이동 시 예외처리도 있으면 좋음
