import React from 'react';
import { Order } from '../app/order/page';

type Props = { order: Order };

export default function OrderItem({ order }: Props) {
  return (
    <tr className='hover:bg-gray-50'>
      <td className='p-2 border border-gray-200 text-center'>{order.orderId}</td>
      <td className='p-2 border border-gray-200 text-left'>{order.name}</td>
      <td className='p-2 border border-gray-200 text-center'>{order.mount}</td>
      <td className='p-2 border border-gray-200 text-right'>{order.price.toLocaleString()}원</td>
      <td className='p-2 border border-gray-200 text-center'>{order.orderState}</td>
    </tr>
  );
}
