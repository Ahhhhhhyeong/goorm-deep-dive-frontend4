import React, { useState } from 'react';

export default function UseStateEx() {
  // 1. 데이터를 저장하는 변수
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  return (
    /** 단점
     * useState가 각 필드마다 필요
     * onChange 함수도 각 필드마다 따로 처리 필요
     * 상태가 많아질수록 코드가 길어짐
     */
    <div>
      <input type='text' placeholder='이름을 입력해주세요' onChange={(e) => setName(e.target.value)} />
      <input type='text' placeholder='이메일을 입력해주세요' onChange={(e) => setEmail(e.target.value)} />
      <input type='text' placeholder='나이를 입력해주세요' onChange={(e) => setAge(e.target.value)} />
    </div>
  );
}
