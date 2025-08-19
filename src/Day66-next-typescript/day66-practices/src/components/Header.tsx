import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='bg-blue-600 text-white p-4'>
      <nav className='flex justify-between max-w-screen mx-auto'>
        <Link href='/' className='font-bold text-xl'>
          MyShop
        </Link>
        <div className='space-x-4'>
          <Link className='font-bold text-lg' href='/counter'>
            Counter
          </Link>
          <Link className='font-bold text-lg' href='/input'>
            Input
          </Link>
          <Link className='font-bold text-lg' href='/toggle'>
            Toggle
          </Link>
          <Link className='font-bold text-lg' href='/todo'>
            Todo
          </Link>
          <Link className='font-bold text-lg' href='/like'>
            Like
          </Link>
          <Link className='font-bold text-lg' href='/admin/login'>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
