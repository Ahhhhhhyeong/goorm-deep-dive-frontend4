import { create } from 'zustand';

export const usePostStroe = create((set) => ({
  posts: [],
  addPost: ({ title, body }) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          id: Date.now(),
          title: title,
          body: body,
        },
      ],
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
