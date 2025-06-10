import React from 'react';

export default function ArticleCard({
  avaterImg,
  profile,
  time,
  title,
  content,
  image,
  likes,
  commnets,
}) {
  return (
    <div className='card'>
      <div className='card-contents'>
        <div className='card-avater'>
          <img className='avater-img' src={avaterImg} alt='아바타' />
          <div className='card-avater-contents'>
            <p className='avater-name'>{profile}</p>
            <span className='avater-time'>{time}</span>
          </div>
        </div>
        <h3>{title}</h3>
        <p className='card-contents-word'>{content}</p>
        <div className='card-meta'>
          <span>공감{likes}</span>
          <span>댓글{commnets}</span>
        </div>
      </div>
      <div className='card-thumbnail'>
        <img src={image} alt='썸네일' />
      </div>
    </div>
  );
}
