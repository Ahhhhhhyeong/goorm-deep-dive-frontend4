import React from 'react';

export default function ImageTest() {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-900 mb-1'>Product Images</label>
      <input
        type='file'
        multiple
        accept='image/*'
        // {...register('images')}
        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
      />
      {/* Image Preview Area
            useState로 관리할 때는 프리뷰가 떴는데, zustant로 관리하니까 안됨..왜지?
          */}
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
        {/* View Photos Larger */}
      </div>
    </div>
  );
}
