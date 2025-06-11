import React from 'react';
import SubMenuItem from './SubMenuItem';

export default function SubVisual() {
  return (
    <div className='sub-visual'>
      {/* <img src="" alt="" /> */}
      <div className='sub-visual-wrapper'>
        <div className='sub-visual-info'>
          <h1>베이커리</h1>
          <p>
            ALWAYS BESIDE YOU, <b>EDIYA BAKERY</b>
          </p>
        </div>
        <div className='sub-button-groups'>
          <SubMenuItem item='음료' />
          <SubMenuItem item='커피' isClick={true} />
          <SubMenuItem item='MD' />
        </div>
      </div>
    </div>
  );
}
