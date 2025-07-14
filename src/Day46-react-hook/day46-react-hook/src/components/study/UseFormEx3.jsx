import React from 'react';
import { useForm } from 'react-hook-form';

export default function UseFormEx3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold text-gray-800 mb-6'>예외 처리</h3>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        {/* 아이디 입력 */}
        <lable className='block'>
          <span className='text-sm font-medium text-gray-700 mb-2 block'>아이디입력:</span>
          <input
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
            type='text'
            {...register('username', {
              required: '아이디를 입력하세요.',
              minLength: { value: 4, message: '최소 4글자' },
              maxLength: { value: 12, message: '최대 12글자' },
              pattern: { value: /^[a-zA-Z0-9]+$/, message: '영문/숫자만' },
            })}
          />
          {errors.username && (
            <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.username.message}</span>
          )}
        </lable>

        {/* 숫자 범위 */}
        <label className='block'>
          <span className='text-sm font-medium text-gray-700 mb-2 block'>나이:</span>
          <input
            type='number'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
            {...register('age', {
              required: '나이를 입력하세요.',
              valueAsNumber: true,
              min: { value: 18, message: '18세 이상만 입력' },
              max: { value: 99, message: '99세 이하만 입력' },
            })}
          />
          {errors.age && <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.age.message}</span>}
        </label>

        {/* 커스텀 설정 
          every() 함수는 배열의 값을 하나씩 가지고 와서 패턴 변수에 담은 다음에 비교
            - 직접 입력한 value변수에 있는 값들
                - 영대소문자, 숫자, 특수문자 모두 하나 이상 포함되면 true,  
                - 아닌경우 false
            - false인 경우 메시지 출력
        */}
        <label className='block'>
          <span className='text-sm font-medium text-gray-700 mb-2 block'>비밀번호:</span>
          <input
            type='password'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
            {...register('password', {
              required: '비밀번호를 입력하세요.',
              validate: (value) =>
                [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/].every((pattern) => pattern.test(value)) ||
                '영대소문자,숫자,특수문자 포함',
            })}
          />
          {errors.password && (
            <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.password.message}</span>
          )}
        </label>

        {/* Select */}
        <label className='block'>
          <span className='text-sm font-medium text-gray-700 mb-2 block'>좋아하는 색:</span>
          <select
            {...register('favoriteColor', { required: '색상을 선택해주세요' })}
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
          {errors.favoriteColor && (
            <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.favoriteColor.message}</span>
          )}
        </label>

        {/* 라디오 버튼 */}
        <span className='text-sm font-medium text-gray-700 mb-2 block'>성별:</span>
        <label className='block'>
          <input type='radio' value={'male'} {...register('gender', { required: '성별 선택하세요' })} /> male
        </label>
        <label className='block'>
          <input type='radio' value={'women'} {...register('gender', { required: '성별 선택하세요' })} /> women
        </label>
        {errors.gender && <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.gender.message}</span>}

        {/* 체크박스 */}
        <label className='block'>
          <span className='text-sm font-medium text-gray-700 mr-2'>이용약관에 동의:</span>
          <input type='checkbox' {...register('agree', { required: '동의 체크를 해주세요' })} />
        </label>
        {errors.agree && <span className='text-sm font-medium text-red-500 mb-2 block'>{errors.agree.message}</span>}

        {/* 제출 버튼 */}
        <input
          type='submit'
          value='제출'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        />
      </form>
    </div>
  );
}
