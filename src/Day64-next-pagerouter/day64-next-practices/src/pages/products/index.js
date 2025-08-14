import { getProduct } from '@/lib/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProduct] = useState([]);

  const fetchProduct = () => {
    const result = getProduct();
    console.log(result);
    setProduct(result);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 border-b pb-2'>물품 리스트</h1>
      {products && products.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-2xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 p-5'>
              <Link href={`/products/${product.id}`}>
                <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                <p className='text-gray-600'>{product.price.toLocaleString()}원</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-500'>등록된 물품이 없습니다.</p>
      )}
    </div>
  );
}
