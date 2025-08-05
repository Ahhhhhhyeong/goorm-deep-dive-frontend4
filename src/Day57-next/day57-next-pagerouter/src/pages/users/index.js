import React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function index() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <h1 className='text-3xl font-bold text-zinc-700'>users 안에 index.js</h1>
      </main>
    </div>
  );
}

/**
 AppRouter 에서 page.js 처럼 대표 페이지 역할을 하는게 index.js

 /users/index.js 를 파일을 작성하면 url을 /users 까지 작성해도 대표페이지를 index.js로 알아서 맵핑
 */
