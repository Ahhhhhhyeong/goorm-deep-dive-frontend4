import { create } from 'zustand';

export const useLoginStore = create((set) => ({
  id: '',
  password: '',
  isLogin: false,
  login: (userData) =>
    set({
      isLogin: true,
      id: userData.id,
      password: userData.password,
    }),

  logout: () =>
    set({
      isLogin: false,
      id: null,
      password: null,
    }),
}));
