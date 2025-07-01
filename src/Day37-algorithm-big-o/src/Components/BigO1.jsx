import React, { useEffect, useState } from 'react';
export default function BigO1() {
  //O(1) 상태관리
  const [user, setUser] = useState({ isLoggedIn: false }); //로그인여부
  const [isDark, setIsDark] = useState(false); //다크모드
  return (
    <div>
      <h3>O(1) 예제 - 빠르게 처리되는 코드</h3>
      {/* O(1) : login 상태 체크 */}
      <h4>isLoggedIn 상태</h4>
      <p>상태 : {user.isLoggedIn ? '로그인됨' : '로그인 안됨'}</p>
      <h4>다크모드</h4>
      <button onClick={() => setIsDark(!isDark)}>{!isDark ? '☀️라이트모드' : '🌙다크모드'}</button>
    </div>
  );
}
