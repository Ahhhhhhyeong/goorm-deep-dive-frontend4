import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <nav className='secondary-nav'>
        <Link href='/admin/dashboard'>dashboard</Link>
      </nav>
      {children}
    </>
  );
}
