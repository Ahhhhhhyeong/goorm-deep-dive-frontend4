import React from 'react';
import { useForm } from 'react-hook-form';
import { useTodoStore } from '../stores/useTodoStore';

export default function TodoForm() {
  const { register, handleSubmit } = useForm();
  const todos = useTodoStore();

  const onSubmit = (data) => {
    console.log(data);
    todos.setTodo(data);
  };
  return (
    <div>
      <h2>Todo Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('title')} placeholder='할 일 입력' />
        <button type='submit'>추가</button>
      </form>
      {todos.todo.length > 0 ? '할 일 목록' : '할 일이 없습니다.'}
      {todos.todo &&
        todos.todo.map((doing) => (
          <p key={doing.id}>
            {doing.title} / {doing.active ? '진행완료' : '진행중'}
          </p>
        ))}
    </div>
  );
}
