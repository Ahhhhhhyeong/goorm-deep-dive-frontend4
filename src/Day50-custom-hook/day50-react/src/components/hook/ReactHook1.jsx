import { useQuery } from '@tanstack/react-query';
import React from 'react';

async function fetchUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/5`);
  return await res.json();
}

export default function ReactHook1() {
  /*   
  useQuery를 쓸 때, v5방식에서는 각체형태로 써야함. 아래는 v5미만에서 가능
  const { data, isLoading, isError } = useQuery(['user'], fetchUser);
  */
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'], //고유 ID
    queryFn: fetchUser, // 실제 데이터를 가지고오는 함수
  });

  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러 발생!!!</p>;
  return (
    <div className='box'>
      <h3>🤭 유저정보</h3>
      <p>이름 : {data.name}</p>
      <p>이메일 : {data.email}</p>
    </div>
  );
}

/**
 React-Query 개발 도구 (선택사항)
 - 외부라이브러리: npm install @tanstack/react-query-devtools
 - 개발 중에 Query 상태를 눈으로 보고 디버깅 할 수 있게 도와주는 도구
 - 개발할 때 유용함

 
설치 후 리액트 쿼리랑 리액트 파일이랑 연결하는 Provider를 설정해야된다
main,app.jsx (main.jsx 코드 참조하기)

 */
