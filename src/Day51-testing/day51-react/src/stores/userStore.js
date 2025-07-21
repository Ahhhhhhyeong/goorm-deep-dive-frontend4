// zudtend

import { create } from 'zustand';

export const useUserStore = create((set) => ({
  name: '',
  setName: (newName) => set({ name: newName }),
}));
