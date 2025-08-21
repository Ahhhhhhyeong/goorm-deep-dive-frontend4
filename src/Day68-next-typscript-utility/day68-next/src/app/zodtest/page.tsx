import React from 'react';
import { z } from 'zod';

export default function page() {
  // 사용자에게 입력 규칙을 선언
  // object() 어떤 규칙으로 검증할 지 사용자 규칙을 만듦
  const UserInput = z.object({
    // 문자열 입력 = string()
    // 최소 글자수 = min(글자수, 에러 메시지)
    name: z.string().min(1, '최소 한 글자 이상 작성해주세요'),
    // 숫자 입력 = number()
    age: z
      .number()
      .int() // 정수만 허용
      .nonnegative(),
    email: z.string().regex(/^[^@]+@[^@]+\.[^@]+$/, '이메일 형식이 아닙니다.'),
    //.email({''}) 예전 버전
  });

  return (
    <div>
      <h1>Zod 외부라이브러리 실습</h1>
    </div>
  );
}

/*
Zod ?
 - 런타임에서 (실행 중인 브라우저)에서 데이터 스키마 선언하고 그 스키마를 검증
   하여 동시에 타입스크립트 타입을 추론해주는 라이브러리 
 - typescript는 컴파일만 (실행 전에만) 안전
 - 런타임(실제 실행중인 브라우저) 실제 데이터 (JSON,요청바디,env,폼 값 등)
   를 검사해 실제 안전을 보장한다.

   

*/
