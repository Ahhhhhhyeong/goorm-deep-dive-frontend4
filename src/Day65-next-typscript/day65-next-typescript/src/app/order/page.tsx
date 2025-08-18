import React from 'react';
import OrderItem from '@/components/OrderItem';

export type Order = {
  orderId: number;
  name: string;
  mount: number;
  price: number;
  orderState: string;
};

export default function OrderPage() {
  const order1 = { orderId: 102345678, name: '샤오미 미밴드 7', mount: 1, price: 59000, orderState: '배송 완료' };
  const order2 = { orderId: 102345677, name: 'USB 충전 케이블 1m', mount: 2, price: 5000, orderState: '배송 중' };
  const order3 = { orderId: 102345676, name: '블루투스 이어폰', mount: 1, price: 89000, orderState: '결제 완료' };
  const order4 = { orderId: 102345675, name: '무선 마우스', mount: 1, price: 15900, orderState: '취소 완료' };

  const orderList = [order1, order2, order3, order4];

  return (
    <div className='grid grid-rows items-center justify-items-center '>
      <div className='grid grid-rows items-center justify-items-center p-8 gap-8 border border-zinc-400 rounded'>
        <h1 className='font-bold text-2xl '>주문 내역</h1>
        <table>
          <thead>
            <tr>
              <th>주문번호</th>
              <th>상품명</th>
              <th>수량</th>
              <th>가격</th>
              <th>배송상태</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((item) => (
              <OrderItem key={item.orderId} order={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
