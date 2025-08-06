import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/testdb/route')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.data || []);
      })
      .catch((err) => {
        console.error('❌ 호출 실패: ', err);
        setError(err);
      });
  }, []);

  return (
    <div
      className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <h1 className='text-[2rem] text-zinc-700 font-bold'>몽고디비 연결 테스트</h1>
        <h3 className='text-[1.4rem] text-pink-400 font-bold'>사용자 정보</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name || '이름 없음'}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

/*
실행 순서

index.js : 얘가 먼저 실행됨
-> useEffect안의 fetch(api-url) 실행 
-> /api/testdb/route.js 실행 
-> mongodb.js 실행 
-> clientPromise 객체 생성 및 route.js 반환 
-> mongodb의 db 찾고, collection 찾아 데이터 가져오기 
-> 상태값, JSON타입의 data return 
-> 다시 호출 부분으로 넘어와서 res 출력 
-> data를 useState에 삽입 

-----

useState, useEffect 등 사용할 때 App router 와 Page router 차이 
  - [react 13버전 이상]App router : app/폴더
      - 반드시 맨위에 `use client` 추가
  - [react 12버전 이하]Page router : page/폴더
      - use client를 안써도 자동으로 클라이언트가 컴포넌트로 작동함

*/
