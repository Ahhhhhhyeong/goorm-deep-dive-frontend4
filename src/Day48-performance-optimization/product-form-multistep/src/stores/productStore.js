import { create } from 'zustand';
export const useProductStore = create((set) => ({
  productData: [],
  setPrdData: (newData) =>
    set((state) => ({
      productData: { ...state, newData },
    })),
}));
