import React, { useState } from 'react';

export default function ProductSelect({ prd, onSelectChange, onQuantityChange }) {
  const [selected, setSelected] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setShowQuantity(true);
    onSelectChange?.(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    onQuantityChange?.(e.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange} className='border px-2 py-1 rounded'>
        <option value='' disabled hidden>
          옵션을 선택해주세요
        </option>
        <option value={prd.membersPrice}>[켈리멤버스] {prd.title}</option>
        <option value={prd.offPrice}>{prd.title}</option>
      </select>

      {showQuantity && (
        <div className='mt-4'>
          <label htmlFor='quantity' className='mr-2 font-semibold'>
            수량:
          </label>
          <input
            id='quantity'
            type='number'
            min='1'
            value={quantity}
            onChange={handleQuantityChange}
            className='border px-2 py-1 w-16 rounded'
          />
        </div>
      )}
    </div>
  );
}
