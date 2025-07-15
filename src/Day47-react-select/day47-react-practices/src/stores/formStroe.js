import { create } from 'zustand';

export const useFormStore = create((set) => ({
  formData: {},
  currentStep: 0,
  setFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),
  prevStep: () =>
    set((state) => ({
      currentStep: state.currentStep - 1,
    })),
}));
