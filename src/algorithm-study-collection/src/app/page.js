// pages/index.js
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: '배열', count: 15, icon: '📊', color: 'bg-blue-100 text-blue-800' },
    { name: '문자열', count: 12, icon: '📝', color: 'bg-green-100 text-green-800' },
    { name: '그래프', count: 8, icon: '🕸️', color: 'bg-purple-100 text-purple-800' },
    { name: '동적 계획법', count: 6, icon: '⚡', color: 'bg-yellow-100 text-yellow-800' },
    { name: '트리', count: 10, icon: '🌳', color: 'bg-red-100 text-red-800' },
    { name: '정렬', count: 9, icon: '📈', color: 'bg-indigo-100 text-indigo-800' },
  ];

  const recentPosts = [
    { title: '이진 탐색으로 효율적인 검색하기', category: '배열', date: '2024-01-15', difficulty: 'Medium' },
    { title: '백트래킹으로 순열 생성하기', category: '재귀', date: '2024-01-12', difficulty: 'Hard' },
    { title: '투 포인터로 배열 문제 해결하기', category: '배열', date: '2024-01-10', difficulty: 'Easy' },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>{/* 어떻게 꾸미지 고민중 */}</main>
    </div>
  );
}
