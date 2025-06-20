import React from 'react';
import { Form, redirect } from 'react-router-dom';

// 폼태그에서 전송 버튼을 클릭했을 때 실행할 수 있는 함수 작성
export async function loginAction({ request }) {
  console.log(request);

  return redirect('/'); // form 전송 시 어디로 이동할지 설정
}

export default function LoginForm() {
  return (
    <div className='my-8'>
      <Form method='POST' className='grid grid-row-4 gap-4'>
        <label className='text-zinc-500 text-sm/1' htmlFor='userId'>
          아이디
        </label>
        <input
          className='border border-zinc-300 rounded-lg py-2 px-1'
          type='text'
          name='userId'
          placeholder='아이디를 입력하세요'
        />
        <label className='text-zinc-500 text-sm/1 mt-4' htmlFor='userPwd'>
          비밀번호
        </label>
        <input
          className='border border-zinc-300 rounded-lg py-2 px-1'
          type='password'
          name='userPwd'
          placeholder='비밀번호를 입력하세요'
        />
        <button
          className='bg-blue-500 text-white py-3 rounded-xl'
          type='submit'>
          로그인
        </button>
      </Form>
    </div>
  );
}
