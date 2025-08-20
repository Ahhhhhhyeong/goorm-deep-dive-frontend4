import React from 'react';

/* 프론트와 백엔드 팀이 함께 프로젝트를 진행해야할 때 */
interface User {
  id: number;
  name: string;
  email?: string;
}

type Gender = '수컷' | '암컷';

/**
 *
 */

interface poketmon {
  type_: string;
  키: number;
  분류: string;
  몸무게: number;
  특정: string;
  성별: Gender;
}

interface 파이리 extends poketmon {
  레벨: number;
}
interface 리자드 extends poketmon {
  레벨: number;
  공격력: number;
}

export default function InterfaceTest() {
  return <div></div>;
}

/** 인터페이스
 * 상호간의 규칙 혹은 약속을 의미
 * 객체 타입을 정의할 때 사용
 * ts에서는 객체의 구조를 만들 때 interface를 더 많이 사용
 */
