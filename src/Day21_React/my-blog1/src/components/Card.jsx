import React from 'react';

import '../App.css';

export default function Card({ userInfo, key }) {
  return (
    <div className='card'>
      <div className='card__avater'>
        {/* if 대신에 and 연산자 활용 */}
        {newDisplay(userInfo.newDisplay)}
        {/* 이미지부분만 컴포넌트 뺄 수 있다 */}
        <figure className='card__avater__img'>
          <img src={userInfo.avaterImg} alt={userInfo.name + ' img'} />
        </figure>
      </div>
      <div>
        <h2>{userInfo.name}</h2>
        <p>{userInfo.job}</p>
      </div>
    </div>
  );
}

function newDisplay(newDisplay) {
  if (newDisplay) {
    return <div className='card__badge'>NEW</div>;
  }
  return <div className='card__badge hidden'>NEW</div>;
}
