import React from 'react';
import '../assets/index.css';
export default function ButtonComponents({ variant = 'primary', size = 'small', onClick, children }) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
}
