/** user/products/index.js
 * 유저들이 보는 페이지
 * 미리 데이터를 가져와서 볼 수 있도록 빌드 타임
 * 빌드 타임(build time)
 *  - next에서 페이지를 미리 만드는 시점
 *  - npm run build할 때
 *    => 프로젝트 배포 전에 컴파일/정적파일을 실행하는 시점
 *    - HTML과 JSON데이터를 미리 생성하는 순간
 *    - 서버의 계산없이 바로 내려주는거 = 정적파일
 *
 */
import React from 'react';
import ProductCard from '@/components/user/ProductCard'; // 카드
import products from '@/data/product'; // data

export default function ProductListPage() {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>제품 목록</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
