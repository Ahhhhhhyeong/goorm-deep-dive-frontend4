import React from 'react';

export default function BestItem({ item }) {
  // console.log('item', item);
  return (
    <div className='best-item'>
      <img src={item.img} alt='베이커리이미지' />
      <h3>{item.title}</h3>
    </div>
  );
}
