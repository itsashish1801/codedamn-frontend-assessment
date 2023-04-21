import Link from 'next/link';
import SearchBox from './SearchBox';

interface Aside {
  closeAside: () => void;
}

function Aside({ closeAside }: Aside) {
  return (
    <aside className='fixed inset-0 z-50 w-full h-screen px-4 py-3 overflow-hidden bg-white'>
      <button
        onClick={closeAside}
        className='inline-flex items-center justify-center flex-shrink-0 p-2 md:hidden'
      >
        <span className='sr-only'>Close Menu</span>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          className='w-6 h-6'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path d='M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z'></path>
        </svg>
      </button>

      <nav>
        <Link href='/'>Profile</Link>
        <div>
          <span>Update</span>
          <ul>
            <li>
              <Link href='/update-profile'>Profile</Link>
            </li>
            <li>
              <Link href='/update-profile'>Socials</Link>
            </li>
            <li>
              <Link href='/update-profile'>Portfolio</Link>
            </li>
            <li>
              <Link href='/update-profile'>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <SearchBox />
    </aside>
  );
}

export default Aside;
