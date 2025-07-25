import React from 'react';

export default function InputComponents({
  label,
  type = 'text',
  placeholder = '입력해주세요',
  value,
  handleInputChange,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
