import React from 'react';
import { useForm } from 'react-hook-form';

export default function Checkbox({ activityOptions, field }) {
  const { value = [], onChange } = field;

  // console.log(field);

  const handleCheckboxChange = (selectedOption) => {
    const currentValues = Array.isArray(value) ? value : [];
    console.log(selectedOption);
    // 같은 value를 가진 객체가 있는지 확인
    const existingIndex = currentValues.findIndex((item) => item.value === selectedOption.value);

    if (existingIndex.length !== -1) {
      //이미 선택된 값이면 제거
      onChange(currentValues.filter((v) => v.value !== selectedOption.value));
    } else {
      //추가
      onChange([...currentValues, selectedOption]);
    }
  };

  return (
    <div>
      {activityOptions.map((active, idx) => (
        <label key={idx} className='block text-mb font-medium text-gray-600'>
          <input
            type='checkbox'
            checked={value?.includes(active.value) || false}
            onChange={() => handleCheckboxChange(active)}
            className='mr-1'
          />
          {active.label}
        </label>
      ))}
    </div>
  );
}
