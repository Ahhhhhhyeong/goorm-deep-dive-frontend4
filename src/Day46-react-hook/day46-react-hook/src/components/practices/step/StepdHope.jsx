import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function StepdHope() {
  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='space-y-4'>
      <h3>희망 부서</h3>
      {/* 희망부서 폼 내용 */}
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>희망부서</label>
        <select {...register('department')} className='w-full px-3 py-2 border border-gray-300 rounded-md'>
          <option value=''>부서선택</option>
          <option value='frontend'>프론트엔드</option>
          <option value='backend'>백엔드</option>
        </select>
        {errors.department && (
          <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.department.message}</span>
        )}
      </div>
      {/* 버튼 영역 */}
      <div className='flex justify-between pt-4'>
        <button
          type='button'
          onClick={() => navigate('/notice-1')}
          className='bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-200'>
          이전
        </button>
        <button
          type='button'
          onClick={() => navigate('/notice-3')}
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200'>
          다음
        </button>
      </div>
    </div>
  );
}
