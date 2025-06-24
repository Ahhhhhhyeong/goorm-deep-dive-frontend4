import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart } = useCart();
  console.log('cart: ', cart);
  return (
    <div className='p-4 shadow-lg  bg-white'>
      <h2 className='text-xl font-bold mb-4'>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className='border-b py-2'>
              <p>{item.title}</p>
              <p>
                {item.price.toLocaleString()}원 × {item.quantity}개
              </p>
              <p>총 합: {(item.price * item.quantity).toLocaleString()}원</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
