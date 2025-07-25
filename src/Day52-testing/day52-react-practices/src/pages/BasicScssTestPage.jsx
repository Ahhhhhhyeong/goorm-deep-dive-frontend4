import React from 'react';

export default function BasicScssTestPage() {
  return (
    <div>
      <h3>카드 반복 생성</h3>
      <div className='card-wrapper'>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={`card-${num}`}>
            {num}
          </div>
        ))}
      </div>

      <div>
        {/* ["h1", "h2", "h3"] 각각 색상 주기 */}
        <h1 className='heading-h1'>텍스트 태그 스타일 적용: h1</h1>
        <h2 className='heading-h2'>텍스트 태그 스타일 적용: h2</h2>
        <h3 className='heading-h3'>텍스트 태그 스타일 적용: h3</h3>
      </div>
    </div>
  );
}
