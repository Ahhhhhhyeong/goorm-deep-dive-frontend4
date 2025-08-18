import React from 'react';
import { Order } from '../app/order/page';

type Props = { order: Order };

export default function OrderItem({ order }: Props) {
  return (
    <tr>
      <td>{order.orderId}</td>
      <td>{order.name}</td>
      <td>{order.mount}</td>
      <td>{order.price}</td>
      <td>{order.orderState}</td>
    </tr>
  );
}
