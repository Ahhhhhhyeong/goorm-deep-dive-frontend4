import React from 'react';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <header className='bg-white shadow px-6 py-4'>
        <h1 className='text-xl font-bold'>My App</h1>
      </header>

      <main className='p-6'>{children}</main>

      <footer className='bg-white shadow px-6 py-4 mt-12'>
        <p className='text-sm text-gray-500'>© 2025 My App</p>
      </footer>
    </div>
  );
}
