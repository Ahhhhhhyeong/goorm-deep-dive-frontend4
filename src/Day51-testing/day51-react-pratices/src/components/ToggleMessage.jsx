import React, { useState } from 'react';

export default function ToggleMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className='simple-toggle' onClick={() => setIsOpen(!isOpen)}>
        토글
      </button>
      <p>{isOpen ? '안녕하세요' : ''}</p>
    </div>
  );
}
