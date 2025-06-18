import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className='flex flex-row 
    items-center p-1 m-4 bg-zinc-200 rounded-full'>
      <figure className='ml-10 grow-1 overflow-hidden'>
        <img
          src='https://sunshine18.cafe24.com/seoul/wp-content/uploads/sites/3/2015/03/logo.png'
          alt='로고이미지'
          className='w-30 h-16 '
        />
      </figure>
      <nav className='grow-1'>
        <ul className='flex flex-row gap-9 text-sm font-light text-neutral-400 '>
          <li className='hover:text-neutral-800'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='hover:text-neutral-800'>
            <Link to='/'>ABOUT</Link>
          </li>
          <li className='hover:text-neutral-800'>
            <Link to='/'>THE RESORT</Link>
          </li>
          <li className=' hover:text-neutral-800'>
            <Link to='/'>FAQ</Link>
          </li>
          <li className='hover:text-neutral-800'>
            <Link to='/'>CONTACT US</Link>
          </li>
        </ul>
      </nav>
      <section className='flex flex-row gap-2'>
        <input
          type='text'
          placeholder='Search here'
          className='bg-white rounded-full p-1'
        />
        <button className='bg-white rounded-full p-1'>🔎</button>
        <button className='bg-white rounded-full p-1'>💜</button>
      </section>
      <section className='mr-8 flex flex-row'>
        <figure className='overflow-hidden'>
          <img
            className='w-[2.1rem] h-[2.2rem] mx-2 rounded-full overflow-hidden'
            src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
            alt='userThumbnail'
          />
        </figure>
        <article>
          <p className='text-sm text-gray-700'>Eugene Mendes</p>
          <p className='text-xs text-gray-600'>353Posts</p>
        </article>
      </section>
    </header>
  );
}
