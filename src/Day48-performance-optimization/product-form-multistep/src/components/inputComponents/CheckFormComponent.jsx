import React from 'react';

export default function CheckFormComponent({ colors, field }) {
  const { value = [], onChange } = field;
  // console.log('colors', colors);

  const handleCheckboxChange = (color) => {
    const currentValues = Array.isArray(value) ? value : [];
    // console.log('color: ', color);
    // 같은 value를 가진 객체가 있는지 확인
    const existingIndex = currentValues.findIndex((item) => item === color);

    if (existingIndex !== -1) {
      //이미 선택된 값이면 제거
      onChange(currentValues.filter((v) => v !== color));
    } else {
      //추가
      onChange([...currentValues, color]);
    }
    // console.log(currentValues);
  };

  return (
    <>
      {colors.map((color, idx) => (
        <label key={`${color}-${idx}`} className='flex items-center cursor-pointer'>
          <input
            type='checkbox'
            checked={value?.includes(color) || false}
            onChange={() => handleCheckboxChange(color)}
            className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
          />
          <span className='ml-2 text-sm text-gray-700'>{color}</span>
        </label>
      ))}
    </>
  );
}
