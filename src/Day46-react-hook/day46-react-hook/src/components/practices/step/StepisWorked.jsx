import React from 'react';
import { useFormContext } from 'react-hook-form';
import useStepNavigate from '../hooks/useStepNavigate';

export default function StepisWorked() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const { goToNext, goToPrev } = useStepNavigate();

  return (
    <div className='space-y-4'>
      {/* 경력 유무 폼 내용 */}
      <h3>경력 유무</h3>
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>경력 유무</label>
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

      {/* 버튼 영역 */}
      <div className='flex justify-between pt-4'>
        <button
          type='button'
          onClick={() => goToPrev('/notice-2')}
          className='bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-200'>
          이전
        </button>
        <button
          type='button'
          onClick={() => goToNext('/notice-4', ['experience'])}
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200'>
          다음
        </button>
      </div>
    </div>
  );
}
