import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Step4() {
  const { formData } = useFormContext();

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>프리뷰</h2>
    </div>
  );
}
