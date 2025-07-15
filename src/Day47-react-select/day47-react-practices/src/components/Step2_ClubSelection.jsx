import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import Checkbox from './CheckBoxComponents';

const clubOptions = [
  { label: '축구부', value: 'football' },
  { label: '도서부', value: 'books' },
  { label: '방송부', value: 'brodcast' },
  { label: '댄스부', value: 'dance' },
];

const activityOptions = [
  { label: '자원봉사', value: 'volunteer' },
  { label: '스터디', value: 'study' },
  { label: '운동', value: 'exercise' },
];

export default function Step2() {
  const { control } = useFormContext();

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>희망 동아리</h2>
      {/* 동아리 선택 */}
      <label className='block text-sm font-medium text-gray-700 mb-2'>동아리 선택</label>
      <Controller
        name='club'
        control={control}
        render={({ field }) => (
          <Select {...field} options={clubOptions} placeholder='원하는 부서를 선택해주세요' isClearable />
        )}
      />
      {/* 부가활동 */}
      <label className='block text-sm font-medium text-gray-700 mb-2'>부가활동</label>
      <Controller
        name='activity'
        control={control}
        render={({ field }) => <Checkbox activityOptions={activityOptions} field={field} />}
      />
    </div>
  );
}
