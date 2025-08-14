import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <h1 className='text-2xl align-center '> 25.08.14 Day64-next-실습 프로젝트</h1>
      <div>
        <Link
          href='/products'
          className='inline-block mb-4 text-blue-700 hover:text-blue-400 font-medium transition-colors duration-200'>
          문제 1: 동적으로 데이터를 불러오는 쇼핑몰 상품 페이지
        </Link>
        <Link
          href='/products'
          className='inline-block mb-4 text-blue-700 hover:text-blue-400 font-medium transition-colors duration-200'>
          문제 2: 투표 결과를 보여주는 페이지
        </Link>
      </div>
    </div>
  );
}
