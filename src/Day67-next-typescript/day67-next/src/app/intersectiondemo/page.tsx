import React from 'react';

interface Student {
  name: string;
  school: string;
}

interface Employee {
  name: string;
  company: string;
}

// 알바생은 학생이면서 편의점 회사 직원이라는 것을 모두 만족해야함 => & 연산자 활용
type WorkingStudent = Student & Employee;

export default function Intersection() {
  return (
    <div>
      <h2>Intersection</h2>
    </div>
  );
}

/** 인터섹션 타입
 * JS의 `&`연산
 * 여러 타입을 모두 만족하는 새로운 타입을 만드는 것
 */
