import React from 'react';

export default function arraytest1() {
  let numArr: number[] = [1, 2, 3];
  let strArr: string[] = ['a', 'b', 'c'];

  /* 제네릭 배열 
    - <> 안에 타입을 넣어주면 그 타입으로 여러개의 데이터를 저장할 수 있음
    - 타입을 변수처럼 받아서 쓸 수 있는 기능
  */
  let numArr2: Array<number> = [1, 2, 3];
  let strArr2: Array<string> = ['hello', 'world'];

  // 실제 개발자들은 제네릭 배열을 자주 쓰지는 않지만
  // 제네릭을 이용해서 함수에서 배열을 다룰 때 특히 많이
  // 사용한다.
  // toArray()-> 데이터를 넣으면 배열로 생성한다.
  //  숫자를 넣으면 숫자 배열로 만들어주고 문자를 넣으면
  //  문자배열로 만들어주는함수
  // function wrapArray<T>(value :T) : Array<T>{
  //   return [value];
  // }

  // 배열에 들어가는 요소의 타입이 여러가지라면
  let multiArr: (number | string)[] = [1, 'a'];

  /** 2차원 배열
   * 행과 열을 이용해서 배열을 엑셀 표처럼 데이터를 저장할 수 있음
   */
  let doubleArr: number[][] = [
    [1, 2, 3],
    [1, 2],
  ];
  console.log(doubleArr[1][1]);

  // type Cell = "ㅁ"|"ㅅ"|"O";
  // // 출력(2차원 배열 출력할 때 )
  // let board: Cell[][] = Array(8)
  //                       .fill(null)
  //                       .map(()=>Array(8).fill(" "))

  return (
    <div>
      <h3></h3>
    </div>
  );
}
