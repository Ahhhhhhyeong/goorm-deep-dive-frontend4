import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step1() {
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
      {/* 학년 체크 */}
      <label className='block text-sm font-medium text-gray-700 mb-2'>학년</label>
      <input
        type='number'
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
        {...register('grade', {
          required: '학년은 필수 입력값입니다.',
          min: { value: 1, message: '1학년부터 4학년까지 있습니다.' },
          max: { value: 4, message: '1학년부터 4학년까지 있습니다.' },
        })}
      />
      {errors.grade && <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.grade.message}</span>}
      {/* 전화번호 체크 */}
      <label className='block text-sm font-medium text-gray-700 mb-2'>연락처</label>
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
