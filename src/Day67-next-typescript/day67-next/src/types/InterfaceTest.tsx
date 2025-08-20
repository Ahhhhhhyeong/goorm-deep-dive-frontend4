//파일명: InterfaceTest.tsx

// 사람
//  이름,나이,키,몸무게

// 학생은 사람이면서 학생이다!
//  학년과 전공

// 회사직원은 사람이면서 직원이다
//  부서

// interface로 구현해보기!
interface Person {
  name: string;
  age: number;
  height: number;
  weight: number;
}

// 학생
interface Student extends Person {
  major: string;
}

// 회사원
interface Employee extends Person {
  department: string;
}
