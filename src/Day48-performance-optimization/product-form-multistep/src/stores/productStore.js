import { create } from 'zustand';

export const useProductStore = create((set) => ({
  productData: [],
  previewUrls: [],
  setPrdData: (newData) =>
    set((state) => ({
      productData: { ...state, newData },
    })),
  setPreviewUrls: (newUrl) =>
    set(() => ({
      previewUrl: newUrl,
    })),
}));
// file 경로이슈
// 이미지를 로컬(프로젝트 안에)저장하는 폴더 필요 : assest or public 폴더 등에 저장
