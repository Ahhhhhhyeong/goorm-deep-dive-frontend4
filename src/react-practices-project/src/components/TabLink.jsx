import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TabLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === `/login/${to}`;
  return (
    <Link
      className={`w-1/3 rounded-lg login-tab ${isActive ? 'tab-click' : ''}`}
      to={to}>
      {children}
    </Link>
  );
}
