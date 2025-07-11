/**
 필터 상태를 관리하는 zustand
    -> 저장소 생성필요
 */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useFilterStore = create((set) => ({
  filter: 'all', //초기상태 설정 => all 전체를 보여줌
  setFilter: (filter) => set({ filter }),
}));

// 미들웨어 기능을 추가한 스토리지 생성
const useStore = create(persist((set, get) => ({}), { name: 'my-app-storage' }));

// immer를 사용한 스토어 생성
const useStoreImmer = create(
  immer((set, get) => ({
    todos: [],
    addTodo: (text) =>
      set((state) => {
        state.todos.push({ text, done: false });
      }),
  }))
);

// devtools를 사용한 스토어 생성
const useStoreDevtools = create(
  devtools(
    (set, get) => ({
      count: 0,
      increment: () => set({ count: get().count + 1 }),
    }),
    { name: 'counter-store' }
  )
);

// 위의 미들웨어 3개를 모두 합친 스토어를 생성
// devtools(persist(immer(...)))
const useTotalStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        //상태와 액션 정의
      }))
    ),
    { name: 'total-store' }
  )
);
