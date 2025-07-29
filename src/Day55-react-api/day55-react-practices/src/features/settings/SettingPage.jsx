import React, { useState } from 'react';
import './CheckStyle.scss';
import clsx from 'clsx';

export default function SettingPage() {
  const list = ['자두', '포도', '사과', '딸기', '수박'];
  const [selectedFruits, setSelectedFruits] = useState([]);

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (fruit) => {
    setSelectedFruits((prev) => {
      if (prev.includes(fruit)) {
        // 이미 선택되어 있으면 제거
        return prev.filter((item) => item !== fruit);
      } else {
        // 선택되어 있지 않으면 추가
        return [...prev, fruit];
      }
    });
  };

  return (
    <div>
      <h3>과일 선택에 따른 스타일 변화</h3>
      <div className='checkbox-list'>
        {list.map((fruit, index) => (
          <label
            key={index}
            className={clsx('checkbox-item', {
              'check-item': selectedFruits.find((item) => item === fruit),
            })}>
            <input
              type='checkbox'
              checked={selectedFruits.includes(fruit)}
              onChange={() => handleCheckboxChange(fruit)}
            />
            <span className={`fruit-label ${selectedFruits.includes(fruit) ? 'selected' : ''}`}>{fruit}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
