import React, { useState } from 'react';

export default function ObjectBigO() {
  //데이터 객체 저장
  const [user, setUser] = useState({
    firstName: 'Lisa',
    isUser: true,
    favoriteNum: [1, 2, 3, 4],
  });
  //로그 정보 저장
  const [logs, setLogs] = useState([]);

  const handAll = () => {
    const output = [];

    //접근 O(1)
    output.push(`user.firstName -> ${user.firstName}`);

    //존재 확인 O(1)
    //hasOwnProperty(): 객체에 해당 키가 존재하는지 확인 메서드
    output.push(`firstName 존재? ${user.hasOwnProperty('firstName')}`);

    // O(1) - 추가, 삭제
    const newUser = { ...user, age: 25 };
    output.push(`추가: age -> 25`);

    // O(n) = key, values : 탐색
    const key = Object.keys(newUser);
    const value = Object.values(newUser);
    const entry = Object.entries(newUser); //key와 값을 동시에 출력

    output.push(`keys🔑 O(n): ${JSON.stringify(key)}`);
    output.push(`values🔑 O(n): ${JSON.stringify(value)}`);
    output.push(`entries🔑 O(n): ${JSON.stringify(entry)}`);

    setUser(newUser); //최종 객체 업데이트
    setLogs(output); //로그출력
  };

  return (
    <div className='question-div'>
      <h2>객체의 빅오</h2>
      <p className='info-p'></p>
      <button onClick={handAll}>start</button>

      <div>
        <h4>현재 객체: </h4>
        <p>{JSON.stringify(user, null, 2)}</p>
      </div>

      <div>
        <h4>연산 로그: </h4>
        <ul>{logs && logs.map((log, idx) => <li key={idx}>{log}</li>)}</ul>
      </div>
    </div>
  );
}
