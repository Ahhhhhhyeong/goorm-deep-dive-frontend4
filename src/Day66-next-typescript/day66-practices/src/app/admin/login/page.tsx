'use client';
import React, { useState } from 'react';

type FormState = {
  username: string;
  password: string;
};

export default function Login() {
  const [form, setForm] = useState<FormState>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  // input 내에서 onChange를 하는 경우 event에 아래와 같이 타입을 넣어주어야한다.
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className='p-8 max-w-md mx-auto'>
      <h2 className='text-xl font-bold mb-4'>관리자 로그인</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={handleChange}
          className='w-full p-2 border rounded'
        />
        <input
          type='password'
          name='password'
          placeholder='비밀번호'
          value={form.password}
          onChange={handleChange}
          className='w-full p-2 border rounded'
        />
        {error && <p className='text-red-500'>{error}</p>}
        <button type='submit' className='w-full bg-black text-white p-2 rounded'>
          로그인
        </button>
      </form>
    </div>
  );
}
