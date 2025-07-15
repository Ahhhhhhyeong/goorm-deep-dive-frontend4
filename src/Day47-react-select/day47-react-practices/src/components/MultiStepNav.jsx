import React from 'react';

export default function MultiStepNav({ isCurrent, children }) {
  const baseClass = 'px-4 py-2 transition-colors duration-200 text-lg';
  const currentClass = 'text-rose-600 font-semibold';
  const pendingClass = 'text-gray-500 ';
  return <span className={`${baseClass} ${isCurrent ? currentClass : pendingClass}`}>{children}</span>;
}
