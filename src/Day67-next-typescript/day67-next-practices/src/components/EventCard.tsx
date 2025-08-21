import type { AnyEvent } from '@/types/interfaceEvent';
import React from 'react';

interface EventCardProps {
  event: AnyEvent;
}
export default function EventCard({ event }: EventCardProps) {
  return (
    <div className='bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl'>
      <div className='flex justify-between '>
        <h2 className='text-2xl font-semibold text-gray-900'>{event.title}</h2>
        <span className='bg-blue-400 text-white text-sm font-semibold px-2 py-1 rounded-full'>{event?.type}</span>
      </div>

      <p className='text-sm text-gray-500 mt-2'>
        날짜: <span className='font-medium'>{new Date(event.date).toLocaleDateString()}</span>
      </p>
      {event?.type === 'offline' && (
        <p className='text-sm text-gray-500 mt-2'>
          잔여 좌석 수:{' '}
          {event.seatsLeft > 0 ? (
            <span className='bg-blue-500 text-white p-1 rounded-full text-sm font-bold'>{event.seatsLeft} 석</span>
          ) : (
            <span className='bg-red-500 text-white p-1 rounded-full text-sm font-bold'>매진</span>
          )}
        </p>
      )}
    </div>
  );
}
