import { getProductById } from '@/lib/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  // console.log(id);
  useEffect(() => {
    fetchProductId();
  }, [id]);

  const fetchProductId = () => {
    const result = getProductById(id);
    // console.log(result);
    setProduct(result);
  };

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <Link
        href='/products'
        className='inline-block mb-4 text-blue-700 hover:text-blue-400 font-medium transition-colors duration-200'>
        ← 뒤로가기
      </Link>

      <h1 className='text-3xl font-bold mb-6 border-b pb-2'>제품 상세 페이지</h1>

      {product && (
        <div className='bg-white rounded-2xl shadow p-6 space-y-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>상품명: {product.name}</h2>
          <p className='text-lg text-gray-700'>가격: {product.price.toLocaleString()}원</p>
          <p className='text-gray-600 leading-relaxed'>설명: {product.description}</p>
        </div>
      )}
    </div>
  );
}
