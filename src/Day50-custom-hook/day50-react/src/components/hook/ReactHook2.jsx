import { useQuery } from '@tanstack/react-query';
import React from 'react';

async function refetchUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
  return await res.json();
}

/* 수동 요청 제어 
  ⚠️ 컴포넌트가 마운트 시에 쿼리가 자동으로 실행되지 않아서 data가 null로 있음
  ⚠️ 다시 실행을 하는 refetch() 를 추가해주어야함.(2-2에서)
*/
export default function ReactHook2() {
  const { data, isLoading, isError } = useQuery({
    /* 필수 옵션 */
    queryKey: ['user'], //고유 ID
    queryFn: refetchUser, // 실제 데이터를 가지고오는 함수

    /* 선택 옵션 */
    enabled: false, // 처음에는 자동 실행되지 않음
  });
  return (
    <div className='box'>
      <h3>❌ 수동제어로 불러오기 실패</h3>
      <p>하지만 자동으로 데이터 안들고왔쥬</p>
      <button onClick={() => refetchUser()}>불러오기</button>
    </div>
  );
}
