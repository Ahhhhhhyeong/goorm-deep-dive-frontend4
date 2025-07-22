import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginStore } from '../stores/useLoginStore';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const login = useLoginStore();

  const onSubmit = (data) => {
    console.log(data);
    if (!login.isLogin) {
      login.logout();
    }
    login.login(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('id')} type='text' placeholder='id' />
        <input {...register('password')} type='password' placeholder='password' />
        <button type='submit'>로그인</button>
      </form>

      <p>{login.isLogin ? '성공' : '실패'}</p>
    </div>
  );
}
