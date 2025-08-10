// app/Algorithm/layout.js
'use client';

import problemMap from '@/lib/problemMap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AlgorithmLayout({ children }) {
  const dateList = Object.keys(problemMap);
  const pathname = usePathname();

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='flex h-screen'>
        <aside className='w-64 bg-white shadow-lg p-6 overflow-auto'>
          <h1 className='text-2xl font-bold text-zinc-800 mb-6'>🧠 알고리즘</h1>
          <nav>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/Algorithm'
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    pathname === '/Algorithm'
                      ? 'bg-blue-100 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}>
                  전체 목록
                </Link>
              </li>
              {dateList.map((date) => (
                <li key={date}>
                  <Link
                    href={`/Algorithm/${date}`}
                    className={`block px-3 py-2 rounded-md transition-colors ${
                      pathname === `/Algorithm/${date}`
                        ? 'bg-blue-100 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}>
                    {date}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className='flex-1 p-8'>
          <div className='max-w-4xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  );
}
