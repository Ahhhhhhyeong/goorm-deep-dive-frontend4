import React from 'react';

const users = ['철수', '영희', '민희', '지훈', '우혁'];
export default function BigOn2() {
  /* flatMap()
  - 플랫하게 만든 후 매핑
  - 배열 안에 배열이 들어있는걸 한 줄로 펼쳐주는 것 
   */
  const arr = [
    [1, 2],
    [2, 3],
    [3, 4],
  ];
  //데이터 분석할 때, 모든 데이터를 핸들링 할 때 유용함
  const result = [1, 2, 3].flatMap((x) => [x, x * 2]);
  console.log(result);

  const friend = users.flatMap((u1, i) => users.slice(i + 1).map((u2) => `${u1} 🤝 ${u2}`));

  return (
    <div>
      <h2>O(n^2)</h2>
      <h4>flatMap() 사용</h4>
      {/* <p>{arr.flat().join(',')}</p> */}
      {/* <p>{result.join(',')}</p> */}
      {friend.map((fp, idx) => (
        <p key={idx}>{fp}</p>
      ))}
      <hr />
      <BigOn2_bakcup />
    </div>
  );
}

export function BigOn2_bakcup() {
  //서로 친구인지 모두 확인 함수
  const firendsPair = [];

  function checkFriend() {
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users.length; j++) {
        //본인과 본인은 패스
        if (i !== j) {
          firendsPair.push(`${users[i]} 🤝 ${users[j]}`);
        }
      }
    }
  }
  checkFriend();
  return (
    <div>
      {/* <h2>O(n^2)</h2> */}
      <h4>모든 사용자간 친구 관계 확인 : 일반함수 사용</h4>
      <ul>
        {firendsPair.map((pair, idx) => (
          <li key={idx}>{pair}</li>
        ))}
      </ul>
      <p>총 비교한 횟수: {firendsPair.length}번</p>
      <p>(n = {users.length} ➡️ n * (n-1))</p>
    </div>
  );
}
