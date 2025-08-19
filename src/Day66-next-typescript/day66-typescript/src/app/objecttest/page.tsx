import React from 'react';

export default function objectest1() {
  type Student = {
    name: string;
    gender: string;
  };
  // 위에 처럼 타입을 선언하면 그 안에 있는 변수의 값들을
  // 모두 받아와야된다.
  let s1: Student = { name: 'seohee', gender: '여성' };

  // 객체 리터럴 타입!
  // object는 조금 애매모호한 타입이 있고 속성이 지정이 안되기 때문에 잘 사용하고
  // 객체 리터럴 타입으로 구조를 명확하게 잡아주는 것이 좋다.
  type Person = {
    name: string;
    age?: number; // ?가 붙은 속성
  };

  let p1 = { name: 'seohee' }; //age (number | undefined)

  // object 타입
  let stud: object = { name: 'Tom', grade: 4 };
  console.log(stud);
  // error: objec는 name의 타입(속성)이 있는지 모름
  // console.log(stud.name);

  let obj: object;
  obj = () => console.log('함수도 집어넣을 수 있다고? 진짜 다 담네;;;');

  return (
    <div>
      <h3>Object 타입에 ?</h3>
    </div>
  );
}
/*
 ? 옵션 속성
  - 있어도 되고 없어도 되는 속성

 옵션 속성을 선택했을 떄 장점
  - 유연성을 높인다. 값이 있을 수도 있고 없을 수도 있다.
  - API응답, 데이터 모델링을 할 때 현실적!

  단점
   - 타입이 사실상 타입 | undefined 라서 사용할 때 체크필요

  객체 타입은 지정을 할 때 크게 두가지로 나뉜다.
   - object 타입 
      : 단순히 이 변수는 객체야 라고 알려주는 타입

   - 객체 리터럴 타입
      : 실무에서도 object는 조금 애매모호한 타입이 있고 속성이 지정이 안되기때문에
        잘 사용하고 객체 리터럴 타입으로 구조를 명확하게 잡아주는 것이 좋다.
*/
