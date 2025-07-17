import React from 'react';
import { useForm } from 'react-hook-form';
import FormError from '../errors/FormError';

export default function WatchTest() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const name = watch('name');

  /*
  단점 
  - name 입력시 마다 전체 컴포넌트가 다시 그림(리렌더링)
   */
  console.log('컴포넌트 전체 리렌더링 됨 ');
  return (
    <div>
      <h1>watch 전체 렌더링 예제</h1>
      <input type='text' {...register('name')} />
      <p>지금 입력한 이름: {name}</p>
      <FormError message={errors.name?.message} />
      {/* 입력값이 특정 조건이면 버튼 활성화 */}
      <button disabled={!name}>다음으로</button>
    </div>
  );
}
