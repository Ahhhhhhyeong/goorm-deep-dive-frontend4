import React from 'react';

export default function InputComponents({ inputs = [], styleMb = 4 }) {
  return (
    <div className={`mb-${styleMb}`}>
      {inputs.map(({ label, value, onChange, type = 'text', id, placeholder = '입력해주세요' }, idx) => (
        <label
          key={id || idx}
          htmlFor={`${label}-${id || idx}`}
          className='block text-sm font-medium text-gray-700 mb-1'>
          {label}:{' '}
          <input
            id={`${label}-${id || idx}`}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </label>
      ))}
    </div>
  );
}
