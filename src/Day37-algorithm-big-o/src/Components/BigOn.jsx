import React from 'react';

export default function BigOn() {
  const friendArr = ['철수', '영희', '민희', '지훈'];
  const personList = [
    { name: '철수', age: 12, email: 'chulsoo@email.com' },
    { name: '영희', age: 14, email: 'younghee@email.com' },
    { name: '민수', age: 11, email: 'minsoo@email.com' },
    { name: '수진', age: 13, email: 'soojin@email.com' },
    { name: '지훈', age: 15, email: '' },
  ];
  function friends(arr) {
    //배열의 길이만큼 한 번씩 반복 = O(n)
    return arr.map((val, idx) => <p key={idx}>{val}</p>);
  }

  return (
    <div>
      <h2>O(n)</h2>
      <h4>배열의 값을 하나씩 출력</h4>
      <p>배열: {JSON.stringify(friendArr)}</p>
      <div className='navi'>{friends(friendArr)}</div>
      <hr />
      {/* 리스트 랜더링 */}
      <h4>사용자 목록 출력</h4>
      <ul style={{ textAlign: 'start' }}>
        {personList.map((user, idx) => (
          <li key={idx}>
            {user.name} - {user.age}세 - {user.email || '이메일 없음❌'}
          </li>
        ))}
      </ul>
      {/* 필터링 : 위의 코드에서 이메일이 없는 사람이 있을 때, 누락된 사용자를 탐색 
        `||` (or) 실행순서
          1. map에서 꺼내서 친구 목록을 가져옴 
          2. 각각 li 태그로 바꿔서 ul안에 반복 나열
          3. email 값이 없다면 || 뒤에 있는 메시지가 나옴
      */}
    </div>
  );
}

// O(n) 이메일 유효성 검사하는 명령문 작성
// const inavls = personList.filter((user) => user.email.trim() === '');
// console.log('email 누락: ', inavls);
