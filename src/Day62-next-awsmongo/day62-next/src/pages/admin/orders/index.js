// 주문 목록 조회 페이지
import axios, { Axios } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
/** TODO(완료하면 지우기)
 * GET /api/admin/orders/{id} : 상세 조회
 * ---------------------------------------
 */
export default function OrderAdminPage() {
  // page 이동
  const router = useRouter();
  // 상태값들을 관리하는 변수
  // 상품 목록 데이터 상태
  const [orders, setOrders] = useState([]);
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

  useEffect(() => {
    axiosOrders();
  }, []);

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
