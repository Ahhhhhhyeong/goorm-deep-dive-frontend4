import Image from 'next/image';
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className='border p-4 rounded shadow hover:shadow-lg transition'>
      <Image
        src={product.image}
        alt={product.name}
        className='w-full h-60 object-cover mb-2 rounded'
        width={1000}
        height={60}
      />
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-sm text-gray-600'>{product.description}</p>
      <p className='mt-2 font-bold text-blue-600'>{product.price.toLocaleString()}원</p>
    </div>
  );
}
