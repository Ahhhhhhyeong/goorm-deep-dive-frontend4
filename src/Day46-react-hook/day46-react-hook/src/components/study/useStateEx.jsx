import React, { useState } from 'react';

export default function useStateEx() {
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [useraddr, setUserAddr] = useState('');
  const [errors, setError] = useState(null);

  const handleSubmit = () => {
    e.preventDefault();

    const newError = {};

    if (!username) newError.username = '이름은 필수';
    if (!useremail.includes('@')) newError.useremail = '이메일이 유효하지 않습니다.';
    setError(newError);
  };
  return (
    <div>
      <h3>UseState 방식</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} />
        <input type='text' value={useremail} onChange={(e) => setUserEmail(e.target.value)} />
        <input type='text' value={useraddr} onChange={(e) => setUserAddr(e.target.value)} />
        <button type='submit'>제출</button>
      </form>
    </div>
  );
}
