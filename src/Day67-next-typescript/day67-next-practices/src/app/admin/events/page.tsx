'use client';
import { type AnyEvent, type ISOString } from '@/types/interfaceEvent';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

export default function EventForm() {
  const [form, setForm] = useState<Partial<AnyEvent>>({}); // ✨ Partial<AnyEvent>로 상태 초기화
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    const fetchData = async () => {
      try {
        const res = await fetch('/api/events', {
          method: 'POST',
          body: JSON.stringify(form),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        // `/events` 페이지로 이동
        router.push('/events');
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const typedValue = name === 'id' || name === 'seatsLeft' ? parseInt(value, 10) : value;

    setForm({
      ...form,
      [name]: typedValue,
    });
  };

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <h2 className='text-3xl font-bold mb-6 text-center text-indigo-600'>이벤트 추가</h2>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto space-y-4'>
        {/* 이벤트 제목 (Title) */}
        <div>
          <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
            이벤트 제목
          </label>
          <input
            id='title'
            type='text'
            name='title'
            value={form.title || ''}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm py-1 focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>

        {/* 이벤트 날짜 (Date) */}
        <div>
          <label htmlFor='date' className='block text-sm font-medium text-gray-700'>
            이벤트 날짜
          </label>
          <input
            id='date'
            type='datetime-local' // ✨ ISOString 형식을 위한 타입
            name='date'
            value={form.date || ''}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm py-1 focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>

        {/* 이벤트 타입 (Type) */}
        <div>
          <label htmlFor='type' className='block text-sm font-medium text-gray-700'>
            이벤트 타입
          </label>
          <select
            id='type'
            name='type'
            value={form.type || ''}
            onChange={handleChange as (e: React.ChangeEvent<HTMLSelectElement>) => void} // ✨ select용 타입 캐스팅
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm py-1 focus:border-indigo-500 focus:ring-indigo-500'>
            <option value=''>타입 선택</option>
            <option value='online'>온라인</option>
            <option value='offline'>오프라인</option>
          </select>
        </div>

        {/* 조건부 입력 필드 */}
        {form.type === 'online' && (
          <div>
            <label htmlFor='url' className='block text-sm font-medium text-gray-700'>
              URL
            </label>
            <input
              id='url'
              type='url'
              name='url'
              value={(form as any).url || ''}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
            />
          </div>
        )}

        {form.type === 'offline' && (
          <>
            <div>
              <label htmlFor='location' className='block text-sm font-medium text-gray-700'>
                장소
              </label>
              <input
                id='location'
                type='text'
                name='location'
                value={(form as any).location || ''}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md py-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              />
            </div>
            <div>
              <label htmlFor='seatsLeft' className='block text-sm font-medium text-gray-700'>
                남은 좌석
              </label>
              <input
                id='seatsLeft'
                type='number'
                name='seatsLeft'
                value={(form as any).seatsLeft || ''}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md py-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              />
            </div>
          </>
        )}

        {/* 제출 버튼 */}
        <button
          type='submit'
          className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          이벤트 추가
        </button>
      </form>
    </div>
  );
}
