// 주문 목록 조회 페이지
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

/** 서버사이드 + 데이터 패칭 */
export async function getServerSideProps({ req }) {
  console.log('쿠키 여부 확인: ', req.headers.cookie);
  //헤더 안에 쿠키가 있으면 저장, 없으면 빈공간
  const cookie = req.headers.cookie || '';
  const isAdmin = cookie.includes('authToken=admin_token');
  // 토큰값이 없으면 로그인 / 있으면 아래 진행

  if (!isAdmin) {
    // 토큰이 없다면 로그인 페이지로 바로 즉시 이동시켜라!(리다이텍트!)
    return {
      redirect: {
        destination: '/admin/login', // 사용자를 보낼 URL 경로
        permanent: false, // 307(임시 리다이렉트) - 캐싱안함
      },
    };
  }

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  try {
    // 관리자로 로그인이 되었다면  서버측에서 API route 호출하여 데이터 가져오기
    // SSR이다보니, url을 절대경로로 사용
    const { data } = await axios.get(`/api/admin/orders`, {
      baseURL,
      headers: { cookie }, // 쿠키를 API전달 (서버사이드 인증)
    });
    // 정상적으로 실행 되면 반드시 return
    return { props: { initialOrders: data } };
  } catch (err) {
    console.log('Error!!', err);
    // 인증 실패시  로그인으로 돌려보내기(선택)
    if (err.response?.status === 401) {
      return {
        redirect: {
          destination: '/admin/login', // 사용자를 보낼 URL 경로
          permanent: false, // 307(임시 리다이렉트) - 캐싱안함
        },
      };
    }
    // 401이 아니라 다른 에러들은 404
    return { notFound: true };
  }
}

export default function OrderAdminPage({ initialOrders = [] }) {
  // page 이동
  const router = useRouter();
  // 상태값들을 관리하는 변수
  // 상품 목록 데이터 상태
  const [orders, setOrders] = useState(initialOrders);
  // 배송 상태를 저장하는 변수
  const statusOptions = ['배송 준비', '배송 중', '배송 완료'];

  // 전체 조회 함수
  const axiosOrders = async () => {
    try {
      const res = await axios.get('/api/admin/orders');
      // console.log(res);
      setOrders(res.data);
    } catch (error) {
      console.error('에러발생', error);
      alert('주문 목록을 불러오지 못했습니다.');
    }
  };

  // 이미 SSR로 데이터를 받았는데 또 호출되면 중복적인 데이터 요청이 됨
  // useEffect(() => {
  //   axiosOrders();
  // }, []);

  // 상태 변경(Patch)
  const handleStatusChange = async (id, newStatus) => {
    // 이벤트가 발생했을 때 값들이 잘 들어오는지 콘솔에서 확인한다
    console.log(id);
    console.log(newStatus);

    const { data } = await axios.patch('/api/admin/orders', { id, status: newStatus });
    // 수정된 부분 콘솔로 확인(목데이터라 실제 변경은 안되어있음)
    console.log('data', data);

    // 변경 된 목록 조회
    await axiosOrders();
  };

  return (
    <div className='p-8'>
      <Link href='/admin' className='text-sm text-blue-600 underline'>
        돌아가기
      </Link>
      <h2 className='text-xl font-bold mb-4'>주문 목록</h2>
      <table className='w-full border'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='p-2 border'>주문 ID</th>
            <th className='p-2 border'>고객명</th>
            <th className='p-2 border'>상품</th>
            <th className='p-2 border'>수량</th>
            <th className='p-2 border'>상태</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className='p-2 border'>{order.id}</td>
              <td className='p-2 border'>{order.user}</td>
              <td className='p-2 border'>
                <Link href={`/admin/orders/${order.id}`}>{order.product}</Link>
              </td>
              <td className='p-2 border'>{order.quantity}</td>
              <td className='p-2 border'>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className='border rounded px-2 py-1'>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
