import React from 'react';
import Vote from '../components/Vote';

export default function LikeBoard() {
  return (
    <div className='s-full bg-white flex flex-col rounded-lg'>
      <div className='mt-3'>
        <p className='text-xl text-center'>좋아요, 싫어요 버튼 클릭!</p>
      </div>
      <div>
        <img
          className='w-full h-150 my-3'
          src='https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'
          alt='image'
        />
      </div>
      <Vote />
    </div>
  );
}
