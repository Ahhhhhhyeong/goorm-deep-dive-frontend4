export interface Person {
  id: number;
  name: string;
  age: number;
  height?: number;
  weight?: number;
}

// 학생
export interface Student extends Person {
  grade: number;
  // 전공은 선택
  major?: string;
}

// 회사원
export interface Employee extends Person {
  // department: string;
  department: 'dev' | 'design' | 'ops' | 'sales';
}

export type AnyPerson = Person | Student | Employee;
