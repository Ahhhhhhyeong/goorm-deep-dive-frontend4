'use client';

import type { AnyEvent } from '@/types/interfaceEvent';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// export default function EvnetDetail({ params }: { params: { id: string } }) {
export default function EvnetDetail() {
  const [event, setEvent] = useState<AnyEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // 'use client' 로 렌더링을 진행해서
  const params = useParams();
  const id = params.id as string; // 타입 단언

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data: AnyEvent = await res.json();
        setEvent(data); // ✨ 가져온 데이터를 event 상태에 저장
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [params.id]);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mx-auto my-12 transition-all duration-300 transform hover:shadow-2xl'>
      {event ? (
        <>
          <h3 className='text-3xl font-bold text-gray-800 mb-4'>{event.title}</h3>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>날짜: </span>
            <span className='font-medium'>{new Date(event.date).toLocaleDateString()}</span>
          </p>

          {/* 이벤트 타입에 따라 다른 정보 표시 */}
          {event.type === 'online' ? (
            <>
              <p className='text-gray-600 mb-2'>
                <span className='font-semibold'>유형: </span>
                <span className='font-medium capitalize'>온라인</span>
              </p>
              <p className='text-gray-600'>
                <span className='font-semibold'>링크: </span>
                <a href={event.url} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                  {event.url}
                </a>
              </p>
            </>
          ) : (
            <>
              <p className='text-gray-600 mb-2'>
                <span className='font-semibold'>유형: </span>
                <span className='font-medium capitalize'>오프라인</span>
              </p>
              <p className='text-gray-600 mb-2'>
                <span className='font-semibold'>장소: </span>
                <span className='font-medium'>{event.location}</span>
              </p>
              <p className='text-gray-600'>
                <span className='font-semibold'>남은 좌석: </span>
                <span className='font-medium'>{event.seatsLeft > 0 ? `${event.seatsLeft} 석` : '매진'}</span>
              </p>
            </>
          )}
        </>
      ) : (
        <div className='text-center py-10 text-gray-500'>No event found.</div>
      )}
    </div>
  );
}
