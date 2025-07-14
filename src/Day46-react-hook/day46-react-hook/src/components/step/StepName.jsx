import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function StepName() {
  const {
    register,
    watch, //실시간 입력값 확인
    formState: { errors },
  } = useFormContext();
  /**
   * name 필드를 실시가ㅣㄴ으로 감시
   * 값이 있으면 아래 00님 반가워요! 라는 문구를 출력
   */
  return (
    <div className='block'>
      <label className='text-sm font-medium text-gray-700 mb-2 block'>이름</label>
      <input
        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
        {...register('name', { required: '이름은 필수입니다.' })}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
    </div>
  );
}
