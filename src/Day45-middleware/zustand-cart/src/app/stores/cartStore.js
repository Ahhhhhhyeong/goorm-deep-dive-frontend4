import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useCartStore = create(
  persist(
    devtools(
      immer((set) => ({
        cart: [
          { id: 1, name: '맥북', quantity: 2 },
          { id: 2, name: '아이폰', quantity: 1 },
        ],
        addItem: (item) => {
          set((state) => {
            const currentItem = state.cart.find((v) => v.id == item.id);
            if (currentItem) {
              currentItem.quantity = item.quantity;
            } else {
              state.cart.push(item);
            }
          });
        },
        removeItem: (id) => {
          set((state) => {
            state.cart = state.cart.filter((v) => v.id !== id);
          });
        },
        updateQuantity: (id, n) => {
          set((state) => {
            const currentItem = state.cart.find((v) => v.id == id);
            if (currentItem && Number(n) >= 0) {
              currentItem.quantity = Number(n);
            }
          });
        },
        clearCart: () => {
          set((state) => {
            state.cart = [];
          });
        },
      }))
    ),
    { name: 'cart-storage' }
  )
);
