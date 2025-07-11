import { create } from 'zustand';
import { persist } from 'zustand/middleware';

//장바구니 추가하면 재고가 빠지는건가?
export const useProductStore = create(
  persist(
    (set) => ({
      products: [
        { id: 1, name: '맥북', quantity: 10 },
        { id: 2, name: '아이폰', quantity: 10 },
        { id: 3, name: '갤럭시', quantity: 10 },
        { id: 4, name: '버즈', quantity: 10 },
        { id: 5, name: 'LG냉장고', quantity: 10 },
        { id: 6, name: '스타일러', quantity: 10 },
        { id: 7, name: '세탁기', quantity: 10 },
      ],
      errorMessage: '',
      removeItem: (item) => {
        (set) => (state) => {
          const find = state.products.find((v) => v.id === item.id);
          if (find.quantity > item.quantity) {
          } else {
            state.errorMessage = `재고보다 많이 선택했습니다. 현재 재고`;
          }
        };
      },
    }),
    { name: 'product-storage' }
  )
);
