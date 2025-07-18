import { useQuery } from '@tanstack/react-query';
import React from 'react';

async function refetchUser() {
  console.log('refetch 실행');
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
  if (!res.ok) throw new Error('API 요청 실패');
  return await res.json();
}

export default function ReactHook2_2() {
  const { data, isFetching, isError, refetch } = useQuery({
    /* 필수 옵션 */
    queryKey: ['user'], //고유 ID
    queryFn: refetchUser, // 실제 데이터를 가지고오는 함수

    /* 선택 옵션 */
    enabled: false, // 처음에는 자동 실행되지 않음
  });
  return (
    <div className='box'>
      <h3>✅ 사용자 정보 수동 불러오기</h3>
      <button onClick={() => refetch()}>{isFetching ? '불러오는 중...' : '불러오기'}</button>
      {isError && <p>에러발생!!</p>}
      {data && (
        <div>
          <p>이름 : {data.name}</p>
          <p>이메일 : {data.email}</p>
        </div>
      )}
    </div>
  );
}
/*
  실행 순서
  1. 컴포넌트가 마운트(처음 시작) 되어도 API요청은 자동으로 실행되지 않음
  2. 버튼을 클릭하면 refetch()가 실행됨
  3. fetchUser() 함수가 호출되어 데이터를 가져온다.
  4. 로딩 중 일 땐 '불러오기 중...' 으로 버튼 텍스트가 바뀜
  5. 데이터가 도착하면 화면에 name, email
*/
/*
Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["user"]
라는 에러가 자주 나타남
=> 
*/
