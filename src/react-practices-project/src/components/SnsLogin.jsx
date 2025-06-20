import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function SnsLogin() {
  const snsButtons = [
    { name: 'apple', bg: 'bg-zinc-200' },
    { name: 'github', bg: 'bg-black' },
    { name: 'kakao', bg: 'bg-yellow-300' },
    { name: 'line', bg: 'bg-icon-line' },
    { name: 'facebook', bg: 'bg-blue-600' },
  ];

  function redirectSnsLogin(value) {}

  return (
    <div>
      <p className='my-3 text-zinc-500 text-sm'>SNS로 계속하기</p>
      <div className='flex gap-12 '>
        {snsButtons.map((bgClass, index) => (
          <Link
            key={index}
            // to={`/login/${bgClass.name}`} 나중에 모든 API가 생성되면,
            to={`/kakaologin`}
            className={`rounded-full size-10 icon-sns ${bgClass.bg} active`}></Link>
        ))}
      </div>
    </div>
  );
}
