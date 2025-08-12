// admin/login/index.js : 관리자 로그인 페이지
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();

  // 입력 상태
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post('/api/admin/login', form, {
        headers: { 'Content-Type': 'application/json' },
      });
      // localstorage 사용하여 로그인 상태 잠깐 저장
      localStorage.setItem('adminLoggedIn', 'true');
      // page 이동
      router.push('/admin');
    } catch (error) {
      const message = '로그인 실패';
      console.log('에러 발생!', error);
      setError(message);
      localStorage.setItem('adminLoggedIn', 'false');
    }
  };

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

/*
  리엑트에서 페이지 이동 : navigation
  next에서 페이지 이동 : page router => next/router
                     app router => next/navigation

  useRouter()
    * router.push("/product") -> 페이지 이동 (기본적으로 history에 기록)
    * router.replace("/login")-> 페이지 이동 (기존 히스토리 대체)
    * router.back() -> 뒤로가기 
    * router.query -> url 쿼리 파라미터 가져오기 /post?id=1&q=강동원
                            router.query.id or q
    * router.pathname => 현재 페이지 경로
    * router.asPath => 쿼리까지 포함한 전체 경로
  */
