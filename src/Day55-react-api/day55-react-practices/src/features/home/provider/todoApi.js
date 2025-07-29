import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com', //todos
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (userId) => `/users/${userId}/todos`,
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
