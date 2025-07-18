import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function ReactHook3({ id = '5' }) {
  async function refetchUser() {
    console.log(`id: ${id}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await res.json();
  }

  // 미리 계산한 1분 값으로 쓸 수도 있음
  const MINUTE = 1000 * 60;
  const {
    data: userName,
    isFetching,
    isError,
    staleTime,
  } = useQuery({
    /* 필수 옵션 */
    queryKey: ['user'], // 고유 ID
    queryFn: refetchUser, // 실제 데이터를 가지고오는 함수
    /* 선택 옵션 */
    staleTime: MINUTE * 5, // 데이터를 얼마나 자주 불러오는지
    refetchOnWindowFocus: true, // 창을 다시 포커스를 얻었을 때, 데이터를 다시 가져올지 여부 (기본값: true)
    /* 사용자 정보 일부만 꺼내기 */
    select: (data) => data.name,
    //onSuccess(), onError() 실무에서는 에러 트래킹으로 많이 사용중!
  });

  return (
    <div className='box'>
      <h3>⏰ staleTime 실습</h3>
      {userName && <p>{userName}</p>}
    </div>
  );
}

/*
 staleTime
  기본값: 0 -> 데이터는 fetch 이후 즉시 stale(오래됨) 상태가 된다.
  탭 포커스 변경시 / 네트워크 다시 연결시 / 컴포넌트 다시 마운트 시 
    => 이런 경우 데이터를 자동 재 요청할 수 있다.

  시간단위를 쓸 때, (ex. 50000, 300000) 이렇게 사용하면 몇 초? 몇 분?인지 구별하기 힘들다.
  => 1000 * 60 * 5 : 5분 => 이렇게 ms * 1분(60) * 5 해주면 더 직관적이다.
  => best!! : 고정된 상수값 MINUTE 을 가지고 계산이 베스트!

  어디서 사용?
  - 실시간 데이터 : (ex 알림)
  - 변경이 적은 데이터 : (ex 마이페이지)
  - 뉴스 피드처럼 일정 시간 마다 갱신
 */
