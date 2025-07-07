import React, { useState } from 'react';

export default function HashPassword() {
  const [password, setPassword] = useState('');
  const passwordChange = () => {};
  return (
    <div>
      <h3>비밀번호 암호화</h3>
      <input type='text' placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)} />

      <button onClick={passwordChange}>암호화</button>
    </div>
  );
}
/*
브라우저 내장 Web Crypto API 를 활용
bcrypt , js-sha256 외부라이브러리 
*/
