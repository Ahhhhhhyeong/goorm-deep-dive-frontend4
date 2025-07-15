import React from 'react';

export default function MultiStepNav({ isCurrent, children }) {
  // console.log(isCurrent);
  const baseClass = 'px-4 py-2 transition-colors duration-200';
  const currentClass = 'text-red-500 font-semibold';
  const pendingClass = 'text-gray-500 text-sm';

  return <span className={`${baseClass} ${isCurrent ? currentClass : pendingClass}`}>{children}</span>;
}
