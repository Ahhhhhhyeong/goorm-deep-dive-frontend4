// userStore.js 유저 정보 상태 관리
import { create } from 'zustand';

export const useUserStore = create((set) => ({
  users: [
    { id: '1', password: '1234', name: 'Lisa' },
    { id: '2', password: '1234', name: 'Jisu' },
  ],
  isLoggined: false,
  currentUser: null,
  loginError: null,
  doLogin: 0,
  findUser: ({ id, password }) =>
    set((state) => {
      const user = state.users.find((p) => p.id == id && p.password == password);
      // console.log(user);
      if (user) {
        return {
          isLoggined: true,
          currentUser: user,
          loginError: '',
          doLogin: 0,
        };
      } else {
        console.log(state.doLogin);
        return {
          isLoggined: false,
          currentUser: null,
          doLogin: state.doLogin + 1,
          loginError: `로그인 실패했습니다. (로그인 시도: ${state.doLogin + 1})`,
        };
      }
    }),
  setLogout: (id) =>
    set((state) => {
      return {
        isLoggined: false,
        currentUser: null,
        loginError: '',
        doLogin: 0,
      };
    }),
}));
