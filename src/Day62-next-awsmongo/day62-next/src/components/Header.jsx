import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-blue-600 text-white p-4'>
      <nav className='flex justify-between max-w-4xl mx-auto'>
        <Link href='/' className='font-bold text-xl'>
          MyShop
        </Link>
        <div className='space-x-4'>
          <Link href='/'>Home</Link>
          <Link href='/user/products'>Product</Link>
        </div>
      </nav>
    </header>
  );
}
