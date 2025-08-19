// 폴더명: any  // 파일명: anytest.tsx

import React from 'react';

export default function anytest() {
  // 타입스크립트에서 자바스크립트처럼 동작하게 만들어주는 타입
  // any
  // - 컴파일러가 타입 체크를 포기했다.
  // - 타입검사 끄고 자동으로 알아서 해라!
  // -  런타임 때 오류 가능성 높아진다.

  // 실제 실무에서도 아에 사용을 안하는 건 아니다
  // - 외부 라이브러리 타입 정의가 안됬을 때 (
  //   오래된 js라이브러리들을 사용할 때 )
  // - 급하게 코드를 짤 때 임시로!
  // - 점진적으로 마이그레이션할 때 (js->ts 바꾸는 중)
  // 가급적이면 any보다는 unknown 이거나 타입을 구체적으로 작성한다.

  let value: any;

  value = 123; //number
  value = 'hello'; // string
  value = true; // boolean
  value = [1, 2, 3]; // array
  value = { foo: 'bar' }; // object

  // unknown 변수
  //  - 모든 타입을 받을 수는 있지만 바로 사용할 수없는 타입!
  //  - any 알아서해라!   unknown 약간 신경쓰기
  //    안정성이 조금 올라간다.
  //  - 뭐든 넣을 수 있지만 쓰려면 먼저 검사부터해라!

  let value2: unknown;

  value2 = 123;
  console.log(value2);

  value2 = 'hello';
  console.log(value2);

  // 바로 못쓴다.
  // console.log(value2.toUpperCase());

  // 타입이 맞는지 먼저 확인하고 사용하자!
  //
  if (typeof value2 === 'string') {
    console.log(value2.toUpperCase());
  }

  let val: unknown = {
    id: 1,
    name: 'eryna',
  };

  // 위에 객체 처럼 데이터를 unknown받으면 검사를 해야되는데
  // 그때 사용하는 연산자 in

  // typeof  타입을 검사하는 연산자
  // typeof 변수명  --> true, false로 준다
  //   조건을 검사할 때 순서도 확인을 해서 작성해야된다.

  if (typeof val === 'object' && val !== null && 'name' in val) {
    console.log('object 맞다!');
  }
  // 밑에 처럼 사용을 하면 null 이나 타입이 올 수있기 때문에 if문 입장에서는
  // 이게 true, false 둘 중 하나만 와야되는데 맞다는건지 틀리다는건지 모르겠다.
  if ('name' in (val as object)) {
    console.log(val);
    console.log((val as { name: string }).name);
  }

  // 실무자들도 컴파일 타임에서 객체의 속성 이름만 모아서 유니온타입
  type User = { id: number; name: string };

  // keyof 코드를 작성하는 시점에 이 객체는 어떤 키들이 있니? 알려주는 것
  // 폼 데이터 검증(사용자가 입력한 key가 올바른치 체크)
  // in + keyof를 이용해서 안전성 타입검사를 한다.
  type UserKeys = keyof User;
  // console.log(UserKeys); "id" | "name"

  return <div></div>;
}
