import React from 'react';
import { useProductStore } from '../../stores/productStore';

export default function Step4() {
  const productData = useProductStore((state) => state?.productData.newData);

  // console.log('productData: ', productData);

  return (
    <div className='max-w-md mx-auto p-6'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-900'>FINAL PRODUCT PREVIEW</h2>
        <p className='text-gray-500 text-sm mt-1'>Product Name: {productData?.prdname}</p>
        <p className='text-gray-500 text-sm mt-1'>Product Price: {productData?.price}</p>
        <p className='text-gray-500 text-sm mt-1'>Product Category: {productData?.category}</p>
        <p className='text-gray-500 text-sm mt-1'>Product Stock: {productData?.stock}</p>
        <p className='text-gray-500 text-sm mt-1'>Product colors: {JSON.stringify(productData?.color, null, 2)}</p>
        {/* <p className='text-gray-500 text-sm mt-1'>Product image: {productData.images}</p> */}
      </div>
    </div>
  );
}
