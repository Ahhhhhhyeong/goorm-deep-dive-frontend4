import Image from 'next/image';

export default function UserHeader() {
  return (
    <header className='w-full max-w-4xl flex items-center justify-between bg-white px-6 py-4 border-b-1 border-gray-300 rounded-t-2xl '>
      {/* 왼쪽 로고 + 타이틀 */}
      <div className='flex items-center gap-3'>
        <Image src='/globe.svg' alt='icon-header' width={40} height={40} className='rounded-full' />
        <h3 className='text-xl font-bold text-gray-800'>Managemerd</h3>
      </div>

      {/* 오른쪽 아바타 */}
      <div>
        <Image
          src='/avatar-placeholder.png' // 유저 아바타가 있다면 props로 받아오는 것도 추천!
          alt='아바타'
          width={44}
          height={44}
          className='rounded-full border border-gray-200 shadow-sm'
        />
      </div>
    </header>
  );
}
