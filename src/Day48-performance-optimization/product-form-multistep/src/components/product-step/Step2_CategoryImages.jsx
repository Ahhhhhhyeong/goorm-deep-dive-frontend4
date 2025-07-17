import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useProductStore } from '../../stores/productStore';

export default function Step2() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const images = useWatch({ control, name: 'images' });
  // const [previewUrls, setPreviewUrls] = useState([]);
  const { previewUrls, setPreviewUrls } = useProductStore();

  // 이미지업로드
  useEffect(() => {
    if (images && images.length > 0) {
      const fileArry = Array.from(images);
      const urls = fileArry.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
      // console.log('urls: ', urls);
      return () => urls.forEach((url) => URL.revokeObjectURL(url));
    } else {
      setPreviewUrls([]);
    }
  }, [images]);

  return (
    <div className='max-w-md mx-auto p-6'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-900'>Product Form</h2>
        <p className='text-gray-500 text-sm mt-1'>Step 2: Category & Images</p>
      </div>

      <div className='space-y-4'>
        {
          // Images
        }
        {/*  <div>
          <label className='block text-sm font-medium text-gray-900 mb-1'>Product Images</label>
          <input
            type='file'
            multiple
            accept='image/*'
            {...register('images')}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
          />
          {// Image Preview Area
           // useState로 관리할 때는 프리뷰가 떴는데, zustant로 관리하니까 안됨..왜지?
          }
          <div className='mt-4 flex flex-wrap gap-4'>
            {previewUrls?.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Preview ${idx + 1}`}
                className='w-24 h-24 object-cover border rounded-md'
                onLoad={() => console.log('Image loaded:', url)}
                onError={(e) => console.log('Image error:', url, e)}
              />
            ))}
            {// View Photos Larger 
            }
          </div>
        </div>

        {/* Category }
        */}
        <div>
          <label className='block text-sm font-medium text-gray-900 mb-1'>Category *</label>
          <select
            {...register('category', { required: 'Category is required' })}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'>
            <option value=''>Select Category</option>
            <option value='electronics'>Electronics</option>
            <option value='clothing'>Clothing</option>
            <option value='books'>Books</option>
            <option value='home'>Home & Garden</option>
          </select>
          {errors.category && <p className='text-red-500 text-sm mt-1'>{errors.category.message}</p>}
        </div>
      </div>
    </div>
  );
}
