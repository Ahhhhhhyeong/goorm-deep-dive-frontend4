import React, { useState } from 'react';
import { useProductStore } from '../app/stores/productStore';
import { useCartStore } from '../app/stores/cartStore';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const [quan, setQuantity] = useState({});
  const products = useProductStore((state) => state.products);
  const addItem = useCartStore((s) => s.addItem);
  const navigate = useNavigate();

  // 뭂품 개수 상태
  const handleQuantityChange = (id, quantity) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Number(quantity),
    }));
  };

  //장바구니 추가 버튼 이벤트
  const handlerAddtoCart = (item) => {
    const result = confirm('장바구니에 추가하시겠습니까?');
    if (result) {
      const quantity = quan[item.id] || 1;
      addItem({ id: item.id, name: item.name, quantity });
      navigate('/cart');
      return;
    }
  };

  return (
    <div className='max-w-xl m-auto p-6 bg-white rounded-xl space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800'>🛍️ 물품 리스트</h2>

      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product) => (
          <li
            key={product.id}
            className='p-4 bg-gray-50 border border-zinc-100 rounded-lg shadow-sm flex flex-col justify-between'>
            <p className='text-gray-800 font-medium'>{product.name}</p>
            <input
              type='number'
              min='1'
              value={quan[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
            />
            <button
              onClick={() => handlerAddtoCart(product)}
              className='px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition-colors'>
              장바구니 추가
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
