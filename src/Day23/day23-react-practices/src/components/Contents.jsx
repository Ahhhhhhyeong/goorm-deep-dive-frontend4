import React from 'react';
import SubVisual from './contents/SubVisual';
import BestItems from './contents/BestItems';

export default function Contents({ items }) {
  // console.log('items', items);
  return (
    <div className='contents'>
      <div className='visual-wrapper'>
        {/* 음료, 푸드, MD */}
        <SubVisual />
      </div>
      <div className='contents-wrapper'>
        <div className='contents-location'>
          <span>Home ＞ 메뉴 ＞ 베이커리 </span>
        </div>
        <div className='contents-best-item'>
          <div className='best-item-divider'>
            <span className='title'>추천상품</span>
          </div>
          <BestItems items={items} />
        </div>
      </div>
    </div>
  );
}
