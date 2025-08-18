import React from 'react';

export default function EnumEx() {
  // 숫자형 enum
  enum Role {
    User, // 자동으로 0이 저장된다.
    Admin = 10, // 처음부터 10이 저장된다.
  }

  // 문자열 enum
  enum OrderStatus {
    Pending = 'PENDING',
    Paid = 'PAID',
  }

  enum Avengers {
    Capt,
    IronMan,
    Thor,
  }

  console.log(Avengers.Capt);

  // key를 이용해서 접근할 수도 있지만 인덱스 번호로도 접근이 가능하다.
  enum Avengers2 {
    Capt,
    IronMan,
    Thor,
  }
  console.log(Avengers2[0]);
  return <div>EnumEx</div>;
}

/*
enum (이넘) : 미리 정해진 선택지 목록
 - 열거형
 - 관련된 값들을 하나의 이름으로 그룹화 하는 타입
 - 상태값, 옵션값, 코드값을 표현할 때 사용

 enum 숫자형, 문자형 타입
  숫자형 enum : 자동으로 0부터 시작해서 1씩 증가
  문자형 enum : 직접 문자열 값을 부여해서 사용

  왜 쓰지?
  let status: string = "배송중";
  status = "배성중";  // 오류에 안 잡힘

  혹시라도 위에 코드처럼 오류가 발생할 수있는 것을 방지하기 위해서 사용한다.
*/
