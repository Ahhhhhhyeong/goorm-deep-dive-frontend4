import Image from 'next/image';
import React from 'react';

export default function ImageCard({ onlyBadge = false, imageUrl, alt, rounded }) {
  const radius = rounded === 'all' ? 'rounded' : 'rounded-t-lg';
  return (
    <div className={`${radius} relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden`}>
      <Image src={imageUrl} alt={alt} width={200} height={200} className='w-full h-full object-cover' />
      {onlyBadge && (
        <div
          className='bg-gray-900 absolute -top-1 right-2
            sm:right-4 px-2 sm:px-3 pt-1 sm:pt-2 pb-1 
            rounded-b-lg shadow-lg 
            flex items-end justify-center 
            min-h-[40px] sm:min-h-[50px]'>
          <span className='text-xs sm:text-sm font-bold text-white'>Only</span>
        </div>
      )}
    </div>
  );
}
