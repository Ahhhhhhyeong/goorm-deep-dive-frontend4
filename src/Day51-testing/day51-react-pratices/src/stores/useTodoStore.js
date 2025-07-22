import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  todo: [],
  setTodo: (newTodo) =>
    set((state) => ({
      todo: [
        ...state.todo,
        {
          id: Date.now(),
          title: newTodo.title,
          active: false,
        },
      ],
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todo: state.todo.filter((val) => val.id !== id),
    })),
}));
