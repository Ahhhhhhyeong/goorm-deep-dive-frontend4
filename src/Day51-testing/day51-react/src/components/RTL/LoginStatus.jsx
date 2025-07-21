import React from 'react';

export default function LoginStatus({ isLoginedIn }) {
  return (
    <div>
      <p>{isLoginedIn ? '로그인 됨' : '로그아웃'}</p>
    </div>
  );
}
