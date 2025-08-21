import type { Form } from '@/lib/types/form';
import React from 'react';

export default function FormInput({ label, name, type = 'text', value, onChange, error }: Form) {
  return (
    <div className='mt-6'>
      <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='block w-full rounded-md border border-gray-300 px-3 py-2 
               text-sm placeholder-gray-400 shadow-sm 
               focus:border-indigo-500 focus:ring-indigo-500 
               focus:outline-none'
      />
      {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
    </div>
  );
}
