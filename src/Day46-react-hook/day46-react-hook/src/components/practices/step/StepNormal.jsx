import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function StepNormal() {
  const navigate = useNavigate();
  const {
    register,
    watch, //실시간 입력값 확인
    formState: { errors },
  } = useFormContext();

  return (
    <div className='space-y-4'>
      <h3>기본 정보</h3>
      {/* 기본 정보 폼 내용 */}
      <div>
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
      </div>
      {/* 버튼 영역 */}
      <div className='flex justify-end pt-4'>
        <button
          type='button'
          onClick={() => navigate('/notice-2')}
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200'>
          다음
        </button>
      </div>
    </div>
  );
}
