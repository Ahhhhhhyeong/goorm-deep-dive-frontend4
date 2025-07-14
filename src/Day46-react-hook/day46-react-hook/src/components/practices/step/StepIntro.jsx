import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function StepIntro() {
  const navigate = useNavigate();
  //router-dom 기능 중 outlet에서 돔을 호출할 때 params를 넘겨줌
  const { onSubmit } = useOutletContext();
  console.log(onSubmit);
  const { register } = useFormContext();

  return (
    <div className='space-y-4'>
      <h3>자기소개</h3>
      {/* 자기소개 폼 내용 */}
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>자기소개</label>
        <textarea
          {...register('introduction')}
          rows={4}
          className='w-full px-3 py-2 border border-gray-300 rounded-md'
          placeholder='간단한 자기소개를 작성해주세요'
        />
      </div>

      {/* 버튼 영역 */}
      <div className='flex justify-between pt-4'>
        <button
          type='button'
          onClick={() => navigate('/notice-3')}
          className='bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-200'>
          이전
        </button>
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200'>
          제출
        </button>
      </div>
    </div>
  );
}
