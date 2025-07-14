import React from 'react';
import { useForm } from 'react-hook-form';

export default function UseFormEx2() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold text-gray-800 mb-6'>다양한 input 처리</h3>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <label className='block'>
          <span className='text-sm font-medium text-gray-700 mb-2 block'>좋아하는 색:</span>
          <select
            {...register('favoriteColor')}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'>
            <option value={''} className='text-gray-500'>
              선택하세요.
            </option>
            <option value={'red'} className='text-gray-900'>
              Red
            </option>
            <option value={'green'} className='text-gray-900'>
              Green
            </option>
            <option value={'blue'} className='text-gray-900'>
              Blue
            </option>
          </select>
        </label>

        {/* 라디오 버튼 */}
        <span className='text-sm font-medium text-gray-700 mb-2 block'>성별:</span>
        <label className='block'>
          <input type='radio' value={'male'} {...register('sex')} /> male
        </label>
        <label className='block'>
          <input type='radio' value={'women'} {...register('sex')} /> women
        </label>

        {/* 체크박스 */}
        <label className='block'>
          <input type='checkbox' {...register('agree')} />
          <span className='text-sm font-medium text-gray-700 mb-2 block'>이용약관에 동의:</span>
        </label>

        <input
          type='submit'
          value='제출'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        />
      </form>
    </div>
  );
}
