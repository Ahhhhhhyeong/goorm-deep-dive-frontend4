import React, { useState } from 'react';

export default function InputBox() {
  const [text, setText] = useState('');
  return (
    <div>
      <input placeholder='텍스트 입력' onChange={(e) => setText(e.target.value)} />
      <p>입력된 값: {text}</p>
    </div>
  );
}
