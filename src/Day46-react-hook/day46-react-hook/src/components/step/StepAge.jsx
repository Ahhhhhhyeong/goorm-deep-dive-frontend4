import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function StepAge() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='block'>
      <label className='text-sm font-medium text-gray-700 mb-2 block'>나이</label>
      <input
        type='number'
        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
        {...register('age', {
          required: '나이는 필수입니다',
          min: { value: 10, message: '10세 이상만 참여 가능' },
        })}
      />
      {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
    </div>
  );
}
