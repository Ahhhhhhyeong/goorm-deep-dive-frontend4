import React from 'react';

export default function ObjectEx() {
  // const user: { id: number; name: string } = {
  //   id: 1,
  //   name: 'Jone Doe',
  // };

  // const user2: { id: number; name: string } = {
  //   id: 2,
  //   name: 'Jane Doe',
  // };
  /** 반복 되는 타입 선언을 해결하기 위해 type을 따로 빼 별칭(alias)을 줌
   * 타입들은 항상 위쪽에 선언
   */
  type Person = {
    id: number;
    name: string;
  };
  type Product = {
    id: number;
    title: string;
    price: number;
  };
  // type 선언
  type Student = {
    id: number;
    name: string;
    grade: number;
    class_: number;
  };

  // data 저장
  const student1: Student = {
    id: 1,
    name: '에리나',
    grade: 1,
    class_: 3,
  };
  const student2: Student = {
    id: 2,
    name: '페이지',
    grade: 2,
    class_: 2,
  };
  const student3: Student = {
    id: 3,
    name: '그레이스',
    grade: 3,
    class_: 3,
  };

  // console.log(student1);
  // console.log(student2);
  // console.log(student3);
  const user: Person = {
    id: 1,
    name: 'Jone Doe',
  };

  const user2: Person = {
    id: 2,
    name: 'Jane Doe',
  };

  const item1: Product = {
    id: 101,
    title: '키보드',
    price: 123000,
  };

  // console.log(item1);

  return (
    <div>
      <h3 className='text-2xl font-bold'>타입스크립트 객체 형식</h3>
      <p>{JSON.stringify(user)}</p>
      <p>{JSON.stringify(user2)}</p>
      <p>{JSON.stringify(item1)}</p>
      <p>{JSON.stringify(student1)}</p>
      <p>{JSON.stringify(student2)}</p>
      <p>{JSON.stringify(student3)}</p>
    </div>
  );
}

/**
 * Object를 왜 씀?
 * - 데이터를 구조화해서 관리하고 여러개의 값들을 하나의 단위로 묶어서 사용
 * -
 */
