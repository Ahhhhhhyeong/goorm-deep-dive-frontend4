import React, { useState } from 'react';

export default function UseObject() {
  //사용자 정보 저장 및 갱신
  const [user, setUser] = useState({
    name: '',
    job: '',
  });

  return (
    <div>
      {/* onChange 이벤트
        리액트에서 입력값이 바뀔 때마다 실행되는 이벤트 핸들러
        기존에 있던 내용들은 유지하고 
        ...user 이용해서 먼저 펼쳐서 복사한 뒤 name만 덮어쓴다. 

        왜 ...(스프레드)를 쓰는지?
        리액트는 부분 업데이트가 안된다. 
        => 기존내용을 복사하고 필요한 부분만 수정
        만약 안 사용하면, 업데이트 하지않은 기존의 내용이 사라질 수 있다.
      */}
      <input
        type='text'
        placeholder='이름'
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <p>{user.name}</p>
    </div>
  );
}
