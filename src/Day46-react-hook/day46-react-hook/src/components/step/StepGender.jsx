import React from 'react';
import { useFormContext } from 'react-hook-form';

const genderOption = [
  { value: 'male', lable: '남성' },
  { value: 'female', lable: '여성' },
];

export default function StepGender() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='block'>
      <span className='text-sm font-medium text-gray-700 mb-2 block'>성별:</span>
      {genderOption &&
        genderOption.map((value, idx) => (
          <label className='block' key={`gender-${idx}`}>
            <input
              type='radio'
              value={value.value}
              {...register('gender', {
                required: '성별 선택은 필수입니다.',
              })}
            />
            {value.lable}
          </label>
        ))}
    </div>
  );
}
