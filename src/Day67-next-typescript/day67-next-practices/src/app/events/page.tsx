'use client';

import EventCard from '@/components/EventCard';
import type { AnyEvent } from '@/types/interfaceEvent';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function EventInfo() {
  const [events, setEvents] = useState<AnyEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/events');

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const responseData = await res.json();
        const eventsArray: AnyEvent[] = responseData.data;
        setEvents(eventsArray);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 text-gray-800'>
      <h3 className='text-3xl font-bold mb-8 text-center text-indigo-600'>전체 이벤트 목록 확인</h3>

      <div className='space-y-6 w-full max-w-2xl'>
        {events.map((event) => (
          <Link href={`/events/${event._id}`} key={event._id} className='p-3'>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
}
