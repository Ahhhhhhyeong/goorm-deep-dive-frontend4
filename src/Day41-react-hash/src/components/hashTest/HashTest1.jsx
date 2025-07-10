import React from 'react';

export default function HashTest1() {
  // 문자를 받아서 숫자로 변경하는 과정이 해싱이다
  function simpleHash(key) {
    // 누적 합을 저장할 변수 0으로 초기화
    let hash = 0;

    /*
    charCodeAt(index)
     문자열 key의 인덱스 i번째 위치 문자를 유니코드 코드 포인트
     (숫자)로 반환
     charCodeAt(a)
     "a" === 97
    */
    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i);
      console.log(hash);
    }
  }

  simpleHash('apple');

  return (
    <div>
      <h3>해시</h3>
    </div>
  );
}
/*
해시(Hash)
 - 데이터를 고정된 크기의 숫자(또는 문자열)로 변환
 - 데이터를 효율적으로 검색하거나 비교하기 위해서
   숫자 형태로 바꿔주는 기술이다

해시 목적
 - 빠른검색
   key를 숫자로 바꿔서 배열 인덱스로 사용하면 매우 빠르게
   찾을 수 있음
 - 비교 단순화
  원본 데이터를 다 비교하지 않고 해시값만 비교하면 빠름

 - 보안 활용
  비밀번호를 저장할 때 실제 값 대신 해시값을 저장
  가장 많이 사용되는 알고리즘 SHA-256

 해시 테이블?
  - 키-값 쌍으로 저장하는 구조
  - 



 사용자가 입력한 key와 value을 해시 테이블에 저장
 key를 이용해서 검색시 해시 함수를 통해 인덱스를 찾아 빠르게
 검색



*/
