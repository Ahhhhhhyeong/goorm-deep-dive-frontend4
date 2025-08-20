import React from 'react';

type Payment = 'card' | 'cash' | 'kakaopay';
// 타입스크립트가 제공해주는 Record라이브러리다! 다운 받을 필요없다 내장 되어있다.
// Record<key,value>
//
const PAYMEMT_OPTIONS: Record<Payment, string> = {
  card: '카드결제',
  cash: '현금결제',
  kakaopay: '카카오페이로 결제',
};

export default function UnionDemo() {
  function pay(method: Payment) {
    if (method === 'card') return '카드결제';
    if (method === 'cash') return '현금결제';
    return '카카오페이 결제';
  }
  function pay2(method2: number | string) {
    // 만약 숫자들어왔을 때 문제가 발생할 수도 있다.
    // console.log(method2.toUpperCase()); 에러발생
  }

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      console.log('Hello ' + x.join(' and '));
    }
    console.log('welcome ' + x); // welcome []
  }

  return (
    <div>
      <h3>택시 결제하는 예제 (유니온타입)</h3>
      <p>{pay('card')}</p>
      <p>{pay('cash')}</p>
      <p>{pay('kakaopay')}</p>
      {/*<p>{pay("apple")}</p>  apple은 Payment타입아니다! 에러를 유발 */}
    </div>
  );
}
/*
실제 프론트엔드 개발자들은 타입을 if문으로 하지 않고 
Recode객체를 하나 만들어서 key를 이용해서 안전성과 빠른 자동완성과 런타임에러를 방지한다
현업에서 자주 쓰이는 매핑테이블

문법으로 미리 만들어진 내용이다
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
*/
