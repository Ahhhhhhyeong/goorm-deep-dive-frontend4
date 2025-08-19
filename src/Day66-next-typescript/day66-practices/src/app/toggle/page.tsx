'use client';
import React, { useState, useEffect } from 'react';

export default function TogglePage() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-14 py-20
        transition-colors duration-500
        ${toggle ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2>Toggle - ON/OFF 스위치</h2>
      <p>토글 상태: {toggle ? 'ON' : 'OFF'}</p>
      <button
        onClick={() => setToggle(!toggle)}
        className={`px-4 py-2 rounded transition-colors duration-300
          ${toggle ? 'bg-yellow-300 hover:bg-yellow-500 text-black' : 'bg-yellow-500 hover:bg-yellow-600 text-white'}`}>
        on/off 스위치
      </button>
    </div>
  );
}
