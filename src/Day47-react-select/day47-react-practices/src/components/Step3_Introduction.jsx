import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step3() {
  const { register } = useFormContext();
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>자기소개</h2>
      <textarea
        {...register('introduction')}
        rows={4}
        className='w-full px-3 py-2 border border-gray-300 rounded-md'
        placeholder='간단한 자기소개를 작성해주세요'
      />
    </div>
  );
}
