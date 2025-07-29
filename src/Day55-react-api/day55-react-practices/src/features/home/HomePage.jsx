import React from 'react';
import { useGetTodosQuery } from './provider/todoApi';
import Card from './components/Card';

export default function HomePage() {
  const { data: todos, isLoading, isError } = useGetTodosQuery(1);

  if (isLoading) return;
  if (isError) return <p>오류 발생!</p>;

  return (
    <div>
      <h3>userId 1의 To Do</h3>
      {todos?.map((todo) => (
        <Card key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}
