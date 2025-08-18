// TupleExample.tsx

import React from 'react';

export default function TupleExample() {
  //타입에 이름을 붙인다.
  type Response = [boolean, string];

  // Tuple 자료형
  //  배열하고 비슷하지만 길이와 각 요소 타입이 고정된 자료형

  // array 요소가 같은 타입만 여러개 들어올 수있다.
  // tuple 요소마다 다른 타입을 순서대로 지정할 수 있다.

  // 튜플 만드는 방법
  // useState = [변수,set변수] 대표적인 튜플 타입으로 사용이 된다.
  const student: [string, number, number] = ['eryna', 1, 3];

  const position: [number, number] = [37.5, 127.0];

  // 응답 상태

  const success: Response = [true, '성공'];

  const error: Response = [false, '에러발생'];

  // 배열 데이터 집어넣을 때
  // 숫자 여러개를 저장할 수있다.
  // 학생명단,상품목록,게시판글 리스트
  const scores: number[] = [90, 80, 70, 60];

  // 좌표 [위도,경도]
  // RGB [빨강,파랑,녹색]
  // React useState(); [값,setter]
  const tupleScores: [number, number] = [90, 80];

  return <div></div>;
}
