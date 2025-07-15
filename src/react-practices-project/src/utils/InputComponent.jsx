import React from 'react';

export default function InputComponent({ inputs = [], selects = [], buttonText = '확인', onClick }) {
  return (
    <div className='space-y-6'>
      {inputs.map(({ label, value, onChange, type = 'number', id, placeholder = '입력해주세요' }, idx) => (
        <div key={id || idx} className='relative'>
          <label
            htmlFor={`${label}-${id || idx}`}
            className='absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600 z-10'>
            {label}
          </label>
          <input
            id={`${label}-${id || idx}`}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                   transition-all duration-200 text-gray-900 placeholder-gray-400'
          />
        </div>
      ))}

      <button
        onClick={onClick}
        className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
               text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 
               transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
               shadow-md hover:shadow-lg'>
        {buttonText}
      </button>
    </div>
  );
}
