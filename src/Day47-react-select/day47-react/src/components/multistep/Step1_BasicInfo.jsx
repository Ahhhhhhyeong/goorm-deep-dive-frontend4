import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step1_BasicInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>기본 정보</h2>
      {/* 이름 입력 */}
      <label className='block text-sm font-medium text-gray-700 mb-2'>이름</label>
      <input
        type='text'
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
        {...register('name', {
          required: '이름은 필수 입력값입니다.',
        })}
      />
      {errors.name && <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.name.message}</span>}
      {/* 나이 체크 */}
      <label className='block text-sm font-medium text-gray-700 mb-2'>나이</label>
      <input
        type='age'
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
        {...register('age', {
          required: '나이는 필수 입력값입니다.',
          min: { value: 19, message: '19세 이상만 지원가능' },
        })}
      />
      {errors.age && <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.age.message}</span>}
      {/* 전화번호 체크 */}
      <label className='block text-sm font-medium text-gray-700 mb-2'>전화번호</label>
      <input
        type='text'
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
        {...register('phone', {
          required: '전화번호는 필수 입력값입니다.',
        })}
      />
      {errors.phone && <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.phone.message}</span>}
    </div>
  );
}
