'use client';
import FormInput from '@/components/FormInput';
import { LoginFormData } from '@/lib/types/user';
import { LoginFromSchema, loginSchema } from '@/lib/utils/validator';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginFromSchema>>({});
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // zod 검증
    const result = loginSchema.safeParse(formData);
    // 실패 시
    if (!result.success) {
      // 각 필드별 에러 정리
      const fieldErrors: Partial<LoginFromSchema> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LoginFromSchema;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // 성공 시
    // 유효성검사 부분 리셋
    setErrors({});

    // API 연동
    const fetchData = async () => {
      try {
        const res = await axios.post('/api/login', formData);
        console.log(res.data);
        setCookie('userId', res.data.userId.toString(), { path: '/' });
        alert('로그인 성공했습니다!메인페이지로 이동합니다..');
        router.push('/');
      } catch (error) {
        console.error(error);
        alert('로그인에 문제가 생겼습니다. 다시 시도해주시기 바랍니다.');
      }
    };
    fetchData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>로그인</h2>
        <p className='mt-2 text-center text-sm leading-5 text-gray-500 max-w'>
          계정이 있는 없는 경우
          <Link
            href='/users/register'
            className='font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150'>
            회원가입 페이지 이동
          </Link>
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='space-y-6 transition-opacity duration-500 '>
            {/* forminput 컴포넌트 사용 */}
            <FormInput
              label='아이디'
              name='username'
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
            />
            <FormInput
              label='비밀번호'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button
              type='submit'
              className='w-full flex justify-center 
                        py-2 px-4 border border-transparent text-sm font-medium rounded-md
                        text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
