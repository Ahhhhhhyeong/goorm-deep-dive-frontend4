import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

// 선택 옵션 배열
const deptOptions = [
  { label: '개발', value: 'dev' },
  { label: '디자인', value: 'design' },
  { label: '기획', value: 'plan' },
];

export default function Step2_Department() {
  const { control } = useFormContext();

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>희망 부서</h2>
      <Controller
        name='department'
        control={control}
        render={({ field }) => (
          <Select {...field} options={deptOptions} placeholder='원하는 부서를 선택해주세요' isClearable />
        )}
      />
    </div>
  );
}
