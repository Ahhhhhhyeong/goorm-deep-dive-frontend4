import React, { useRef, useState } from 'react';

export default function ControlledEx() {
  const [name, setName] = useState('');
  return (
    <div>
      <h3>Controlled 방식</h3>
      <input type='text' placeholder='이름을 입력' value={name} onChange={(e) => setName(e.target.name)} />
    </div>
  );
}
