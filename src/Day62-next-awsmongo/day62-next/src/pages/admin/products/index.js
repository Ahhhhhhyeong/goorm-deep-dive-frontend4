// products-> index.js
// 자동으로 products까지가 url 주소가 된다.
// 상품관리 페이지

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductAdminPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 즉시 실행 함수
    (async () => {
      try {
        const { data } = await axios.get('/api/admin/products');
        setProducts(data);
      } catch (error) {
        console.log('상품을 불러오지 못했습니다.', error);
      }
    })();
  }, [router]);

  return (
    <div>
      <Link href='/admin' className='text-sm text-blue-600 underline'>
        돌아가기
      </Link>
      <h2 className='text-xl font-bold mb-4'>상품 목록</h2>
      <table className='w-full border'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='p-2 border'>상품이미지</th>
            <th className='p-2 border'>상품명</th>
            <th className='p-2 border'>가격</th>
            <th className='p-2 border'>재고</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className='p-2 border'>
                <Image className='w-full h-full' src={p.image} alt={p.name} width={100} height={100} />
              </td>
              <td className='p-2 border'>{p.name}</td>
              <td className='p-2 border'>{p.price}</td>
              <td className='p-2 border'>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * 함수를 만듦과 동시에 바로 사용하는 문법.
 * 즉시 실행함수
 * => await는 useEffect 안 혹은 함수 바깥에서 사용을 할 수 없다
 * => 익명 비동기 함수(이름이 없는 함수)를 만들어서 딱 한번씩만 실행
  (() => {
    //함수가 실행하면 어떤 코드를 실행할지 작성
  })()
  마지막 ()는 함수를 작성하자마자 바로 실행(호출 함수)
 */
