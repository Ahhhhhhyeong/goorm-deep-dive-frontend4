'use client';
import { useParams } from 'next/navigation';
import problemMap from '@/lib/problemMap';

export default function DatePage() {
  const { date } = useParams();
  const ProblemComponent = problemMap[date];

  if (!ProblemComponent) {
    return <p className='text-red-500'>문제가 아직 없습니다: {date}</p>;
  }

  return (
    <div>
      <h2 className='text-xl font-semibold text-pink-600 mb-4'>날짜: {date}</h2>
      <ProblemComponent />
    </div>
  );
}
