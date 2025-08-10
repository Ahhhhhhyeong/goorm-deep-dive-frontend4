import React from 'react';

export default function Footer() {
  return (
    <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-gray-200 py-5'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 '>
        {/* Logo / Branding */}
        <div className='text-lg font-bold'>MyAlgorithm</div>

        {/* Copyright */}
        <div className='text-xs text-zinc-400'>&copy; {new Date().getFullYear()} MyAlgorithm. All rights reserved.</div>
      </div>
    </footer>
  );
}
