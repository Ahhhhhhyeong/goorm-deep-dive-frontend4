import React from 'react';

export default function ButtonComponents({ onClick, children }) {
  return (
    <button
      className='px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
      onClick={onClick}>
      {children}
    </button>
  );
}
