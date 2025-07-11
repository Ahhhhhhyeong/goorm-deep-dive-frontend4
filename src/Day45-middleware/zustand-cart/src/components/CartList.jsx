import React from 'react';
import { useCartStore } from '../app/stores/cartStore';
import { useNavigate } from 'react-router-dom';

export default function CartList() {
  const { cart, updateQuantity, clearCart, removeItem } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-xl shadow space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800'>🛒 카트 목록</h2>

      {cart.length === 0 ? (
        <p className='text-gray-500'>카트에 물건이 없습니다.</p>
      ) : (
        <ul className='space-y-4'>
          {cart.map((item) => (
            <li key={item.id} className='flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm'>
              <div>
                <p className='font-semibold text-gray-800'>{item.name}</p>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='number'
                  className='w-20 px-2 py-1 border rounded text-right'
                  value={item.quantity}
                  min={1}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className='px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors'>
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className='flex justify-center gap-4 mt-6'>
        <button
          onClick={() => navigate('/')}
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
          상품 보러가기
        </button>
        <button
          onClick={() => clearCart()}
          className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors`}>
          장바구니 초기화
        </button>
      </div>
    </div>
  );
}
