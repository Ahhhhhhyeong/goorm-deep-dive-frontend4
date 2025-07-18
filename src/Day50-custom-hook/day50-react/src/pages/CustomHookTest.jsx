import React from 'react';
import useUser from '../components/useUser';

export default function CustomHookTest() {
  const { user, loading } = useUser(1);

  return (
    <div>
      <div className='box'>
        <h2>useUser 커스텀 훅과 사이드 이펙트 예제</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>
            {user.name} / {user.email}
          </p>
        )}
      </div>
    </div>
  );
}
