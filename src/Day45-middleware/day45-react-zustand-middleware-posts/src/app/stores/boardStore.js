import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useBoardStore = create(
  devtools(
    immer((set) => ({
      posts: [],
      currentId: 1,
      addPost: (title, content) =>
        set((state) => {
          state.posts.push({
            id: state.currentId++,
            title,
            content,
          });
        }),
      deletePost: (id) =>
        set((state) => {
          state.posts = state.posts.filter((p) => p.id !== id);
        }),
      updatePost: (id, title, content) =>
        set((state) => {
          const currentPost = state.posts.find((v) => v.id === id);
          if (currentPost) {
            currentPost.title = title;
            currentPost.content = content;
          }
        }),
    })) //데이터 수정, 삭제, 업데이트
  )
);

/*
미들웨어를 확인하기 위해서는 브라우저에 redux DevTools 이라는 확장프로그램이 필요
개발자 도구 -> redux 라는 탭이 생김
*/
