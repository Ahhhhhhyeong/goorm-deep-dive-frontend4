export default function Header() {
  return (
    <header className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* 로고 */}
        <div className='text-xl font-bold text-zinc-800'>MyAlgorithm</div>

        {/* 네비게이션 */}
        <nav>
          <ul className='hidden sm:flex gap-6 text-sm text-zinc-600'>
            <li>
              <a href='/' className='hover:text-zinc-900 transition'>
                Home
              </a>
            </li>
            <li>
              <a href='/Algorithm' className='hover:text-zinc-900 transition'>
                Algorithm
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
