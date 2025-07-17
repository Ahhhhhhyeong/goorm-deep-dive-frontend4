import React from 'react';
import { useProductStore } from '../../stores/productStore';
import { useFormContext, useWatch } from 'react-hook-form';

export default function Step1() {
  // const { productData } = useProductStore();
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const [prdname, price] = useWatch({
    control,
    name: ['prdname', 'price'],
  });

  return (
    <div className='max-w-md mx-auto p-6'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-900'>Product Form</h2>
        <p className='text-gray-500 text-sm mt-1'>Step 1: Name and Price</p>
      </div>

      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-900 mb-1'>Product Name</label>
          <input
            type='text'
            {...register('prdname', {
              required: 'Product name is required',
            })}
            placeholder='Enter Product Name'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
              errors.prdname ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {/* 에러가 있을 때만 표시 */}
          {errors.prdname && <p className='text-red-500 text-sm mt-1'>{errors.prdname.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-900 mb-1'>Price</label>
          <input
            type='number'
            min='0'
            step='1'
            {...register('price', {
              required: 'Price is required',
              min: { value: 0, message: 'Price must be 0 or greater' },
              validate: (value) => Number.isInteger(Number(value)) || 'Please enter a whole number',
            })}
            placeholder='Enter Price'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
              errors.price ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {/* 에러가 있을 때만 표시 */}
          {errors.price && <p className='text-red-500 text-sm mt-1'>{errors.price.message}</p>}
        </div>
      </div>
    </div>
  );
}
