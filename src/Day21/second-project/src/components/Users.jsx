import React from 'react';

export default function Users({ user, addr }) {
  return (
    <div>
      {/* js의 객체를 넘겨받아서 정보를 출력 */}
      <h2>이름 : {user.name}</h2>
      <p>나이 : {user.age}</p>
      <p>주소 : {addr}</p>
    </div>
  );
}
