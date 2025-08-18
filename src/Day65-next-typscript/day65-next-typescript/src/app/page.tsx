import ArrayEx from '@/components/ArrayEx';
import ObjectEx from '@/components/ObjectEx';
import TotalEx from '@/components/TotalEx';
import Link from 'next/link';

export default function Home() {
  // 변수 만드는 방법
  /* 숫자 (정수 + 실수 둘 다 사용 가능) */
  let age: number = 22; // 숫자 타입
  let height: number = 183.4;
  let mins: number = -3;
  const infinity: number = Infinity;
  const notANumber: number = NaN;

  /** string 문자열
   * 문자 여러개를 지정할 때 사용하는 타입
   */
  let name: string = '홍길동';
  let address: string = '대한민국';

  /** boolean : 참과 거짓 중 하나를 지정하는 타입 */
  let isNumber: boolean = true;
  let isLogin: boolean = false;

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <h1 className='text-2xl font-bold'>TypeScript 시작</h1>
      <div className='grid grid-rows gap-5'>
        <ArrayEx />
        <ObjectEx />
        <TotalEx />
        <Link href='/order/'>주문 내역 확인 실습</Link>
      </div>
    </div>
  );
}

/*
타입스크립트?
: 자바스크립트에서 확장 된 언어!
: js는 모든 타입들을 허용해준다.

  // js
  // let num = 10;
  // num='hello'  이렇게 변경해도 ok
 => 이렇게 되면, 타입 오류(버그)가 생길 수 있음


타입스크립트를 왜 사용하는지?
= js는 자유로운 언어이다보니 문법이 유연해지고 그로 인해서 버그들이 발생 -> 타입시스템(언어 타입 관련된 문법 체계를 모아둔것)을 활용
= 타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면 파일을 한 번 변환 해주어야 함. => 컴파일(compfile) 필요

---
* 정적 타입 시스템 
  - 대표적으로 자바, C, C++ 등
  - 코드가 실행 이전 모든 변수의 타입을 고정적으로 결정
  - 런타임(프로그램이 실행중)에 오류를 최대한 줄이고 메모리 기능을 향상하기 위해 사용

* 동적 타입 시스템
  - 대표적으로 파이썬, 자바스크립트, 루비 등
  - 코드를 실행하고 나서 그때 그때마다 유동적으로 변수의 타입을 결정함
  - 빠른 프로토타이핑과 스크립팅에 유리
  - 다양한 타입 데이터를 쉽게 처리 가능

---
isNum 혹은 isLogin 같이 변수명으로 is를 사용하는 경우
 - is는 함수가 특정 조건을 만족하면 매개변수가 어떤 타입을 보장
 - is 접두사 변수나 함수가 boolean 타입을 반환한다라는 뜻으로 사용

---

*/
