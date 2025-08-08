import React from 'react';
import ImageCard from './ImageCard';

export default function ItemCard() {
  let testPrice = 9900;

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4'>
      <div className='flex-1 min-w-0'>
        <ImageCard onlyBadge={true} imageUrl={'/images/pokemon.jpg'} alt='포켓몬' rounded='all' />
        <p className='text-xs sm:text-sm text-zinc-400 py-1'>가게이름</p>
        <p className='text-sm sm:text-base md:text-lg text-zinc-700 line-clamp-2'>물건이름</p>
        <div className='flex flex-row gap-1 text-sm sm:text-base md:text-lg font-semibold'>
          <span className='text-sky-400'>58%</span>
          <span>{testPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
