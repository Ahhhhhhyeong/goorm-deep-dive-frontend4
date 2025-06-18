import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='m-4'>
        <Outlet />
      </main>
    </div>
  );
}
