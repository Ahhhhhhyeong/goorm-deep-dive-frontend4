import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
//import { useProductStore } from '../../stores/productStore';
import CheckFormComponent from '../inputComponents/CheckFormComponent';

export default function Step3() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  // const { productData } = useProductStore();

  return (
    <div className='max-w-mb mx-auto p-6'>
      <h3 className='text-lg font-semibold text-gray-800 mb-4'>Product Stock & Options</h3>

      <div className='space-y-4 p-3'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Product Stock</label>
          <input
            type='number'
            {...register('stock', {
              required: 'Stock is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Color</label>
          <div className='flex flex-wrap gap-3 border border-zinc-300 p-3 rounded'>
            <Controller
              name='color'
              control={control}
              render={({ field }) => <CheckFormComponent colors={colors} field={field} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'gray',
  'black',
  'white',
  'cyan',
  'magenta',
  'lime',
  'indigo',
  'teal',
  'violet',
  'gold',
  'silver',
  'beige',
];
