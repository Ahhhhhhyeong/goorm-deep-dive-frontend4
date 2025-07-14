// NavItem.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ to, children }) => {
  const getLinkClass = ({ isActive, isPending }) => {
    const baseClass = 'px-4 py-2 transition-colors duration-200';

    if (isPending) return `${baseClass} text-gray-500`;
    if (isActive) return `${baseClass} text-red-500 font-semibold`;
    return `${baseClass} text-gray-700 hover:bg-gray-200`;
  };

  return (
    <NavLink to={to} className={getLinkClass}>
      {children}
    </NavLink>
  );
};
