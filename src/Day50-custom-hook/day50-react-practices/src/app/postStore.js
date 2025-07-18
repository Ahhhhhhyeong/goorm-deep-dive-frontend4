import { create } from 'zustand';

export const usePostStroe = create((set) => ({
  posts: [],
  searchPost: [],
  addPost: (data) =>
    set((state) => ({
      posts: data,
    })),
  searchPostTitle: (item) =>
    set((state) => {
      console.log('검색어: ', item);
      return {
        searchPost: state.posts.filter((post) => post.title.trim().toLowerCase().includes(item.toLowerCase())),
      };
    }),
  searchPostBody: (item) =>
    set((state) => ({
      searchPost: state.posts.filter((post) => post.body.includes(item)),
    })),
}));
