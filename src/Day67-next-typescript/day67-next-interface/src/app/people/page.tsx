import PersonCard from '@/components/PersonCard';
// type을 불러올 때는 타입을 명시해주어야 함
import type { AnyPerson } from '@/types/people';
import React from 'react';

export default function PeopleList() {
  const personList: AnyPerson[] = [
    { id: 1, name: 'Shami', age: 20, weight: 46, height: 165 }, //person
    { id: 2, name: 'Jane', age: 22, weight: 43, height: 157, grade: 3, major: 'cs' }, //student
    { id: 3, name: 'Jhon', age: 30, weight: 65, height: 181, department: 'dev' }, //empolyee
  ];
  return (
    <div>
      <h3>회원 관리</h3>
      {personList.map((p) => (
        <PersonCard human={p} key={p.id} />
      ))}
    </div>
  );
}
