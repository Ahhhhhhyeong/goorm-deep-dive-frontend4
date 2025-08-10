// app/Algorithm/page.js
import problemMap from '@/lib/problemMap';

export default function AlgorithmMain() {
  const dateList = Object.keys(problemMap);

  return (
    <div>
      <h2 className='text-2xl font-semibold text-zinc-800 mb-6'>알고리즘 문제 목록</h2>
      <p className='text-gray-600 mb-4'>
        총 <span className='font-semibold text-blue-600'>{dateList.length}개</span>의 문제 세트가 있습니다.
      </p>
      <div className='text-gray-500'>← 왼쪽 메뉴에서 날짜를 선택하여 문제를 확인해보세요.</div>
    </div>
  );
}
