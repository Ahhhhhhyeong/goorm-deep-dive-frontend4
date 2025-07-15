import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step3_Experience() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>경력 유무</h2>
      <div className='space-y-2'>
        <label className='flex items-center'>
          <input type='radio' value='experienced' {...register('experience')} className='mr-2' />
          있음
        </label>
        <label className='flex items-center'>
          <input type='radio' value='newcomer' {...register('experience')} className='mr-2' />
          없음
        </label>
        {errors.experience && (
          <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.experience.message}</span>
        )}
      </div>
    </div>
  );
}
