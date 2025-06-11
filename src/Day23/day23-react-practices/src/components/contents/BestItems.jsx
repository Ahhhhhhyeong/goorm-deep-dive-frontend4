import React, { useState } from 'react';
import BestItem from './BestItem';

export default function BestItems({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; // 한 화면에 보일 아이템 개수

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxIndex = items.length - itemsPerView;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };
  return (
    <div className='carousel-container'>
      <button className='nav-button' onClick={handlePrev}>
        ＜
      </button>
      <div className='carousel-viewport'>
        <div
          className='carousel-track'
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}>
          {items.map((item, index) => (
            <BestItem item={item} key={index} />
          ))}
        </div>
      </div>
      <button className='nav-button' onClick={handleNext}>
        ＞
      </button>
    </div>
  );
}
