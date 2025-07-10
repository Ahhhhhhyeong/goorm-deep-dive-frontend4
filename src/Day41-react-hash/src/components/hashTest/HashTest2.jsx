import React from 'react';

export default function HashTest2() {
  const tableSize = 5;

  // 각 칸은 배열임-> 충돌이 일어나도 여러 값 저장이 가능하다
  const table = new Array(tableSize).fill(null).map(() => []);

  // 실제 해시 테이블에 추가를 한다.
  function insert(key, value) {
    let hash = 0;

    console.log(`key: ${key}`);
    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i);
    }
    console.log(`해싱됨:${hash}`);

    // 배열의 인덱스를 결정
    // 전체 테이블 크기에서 나머지를 계산
    const index = hash % tableSize;
    console.log(`index: ${index}`);

    // 테이블에 저장한다
    table[index].push([key, value]);

    console.log(`현재 테이블 : ${table}`);
    console.log('현재 테이블 :', JSON.stringify(table));
  }
  insert('dog', '강아지');
  insert('cat', '고양이');
  insert('bird', '새');

  return (
    <div>
      <h3>Hash 테이블에 저장하는 시뮬레이션</h3>
      <p>{JSON.stringify(table)}</p>
    </div>
  );
}
/*
 해시테이블 구조
  - table = [[],[],[],[]]
     인덱스에 배열이 들어가는 구조 - 체이닝 방식
*/
