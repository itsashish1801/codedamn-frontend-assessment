import { useState } from 'react';
import Link from 'next/link';

import { Navbar } from '@/interfaces/sections';

import SearchBox from './SearchBox';
import Streak from './Streak';
import Notification from './Notification';
import ProfileMenu from './ProfileMenu';
import Aside from './Aside';

function Navbar({
  currentstreak,
  notificationCount,
  image,
  imageAlt,
  level,
}: Navbar) {
  const [showAside, setShowAside] = useState(false);

  function closeAside() {
    setShowAside(false);
  }

  return (
    <>
      <nav className='sticky top-0 z-50 flex items-center justify-between w-full py-3 pl-4 pr-6 bg-white bg-opacity-90 backdrop-blur-sm lg:px-0'>
        <div className='flex'>
          <button
            onClick={() => setShowAside(true)}
            className='inline-flex items-center justify-center flex-shrink-0 p-2 md:hidden'
          >
            <span className='sr-only'>Open Menu</span>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              className='w-6 h-6 rotate-180'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path fill='none' d='M0 0h24v24H0V0z'></path>
              <path d='M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z'></path>
            </svg>
          </button>
          <Link href='/' className='flex items-center gap-1'>
            <svg
              xmlnsXlink='http://www.w3.org/1999/xlink'
              className='h-7 w-7'
              viewBox='0 0 53 58'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width='53'
              height='58'
            >
              <mask
                id='mask0_1275_84'
                style={{ maskType: 'alpha' }}
                maskUnits='userSpaceOnUse'
                x='0'
                y='29'
                width='53'
                height='29'
                fill='none'
              >
                <rect y='29' width='53' height='29' fill='#D9D9D9'></rect>
              </mask>
              <g mask='url(#mask0_1275_84)' fill='none'>
                <path
                  d='M44 42.5L35.0351 37.1669C31.0351 42.6669 25 42 22 39.5C18.5003 36.7534 15.7595 25.3619 22 19C24.9828 15.9591 31.3219 14.982 35.0351 20.5L43.5 15C41.6667 11.8333 35.5351 6.00174 27.5351 6.00174C20.3685 5.88981 6.20348 10.5673 7.03507 30.166C7.83807 49.0909 21.0115 52.5116 27.5351 52.5C35.5351 52.4858 42.1667 45.6666 44 42.5Z'
                  fill='#EA3F40'
                ></path>
              </g>
              <mask
                id='mask1_1275_84'
                style={{ maskType: 'alpha' }}
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='53'
                height='29'
                fill='none'
              >
                <rect
                  width='53'
                  height='29'
                  transform='matrix(1 0 0 -1 0 29)'
                  fill='#D9D9D9'
                ></rect>
              </mask>
              <g mask='url(#mask1_1275_84)' fill='none'>
                <path
                  d='M44 15.5L35.0351 20.8331C31.0351 15.3331 25 16 22 18.5C18.5003 21.2466 15.7595 32.6381 22 39C24.9828 42.0409 31.3219 43.018 35.0351 37.5L43.5 43C41.6667 46.1667 35.5351 51.9983 27.5351 51.9983C20.3685 52.1102 6.20348 47.4327 7.03507 27.834C7.83807 8.90914 21.0115 5.48845 27.5351 5.5C35.5351 5.51417 42.1667 12.3334 44 15.5Z'
                  fill='#EA3F40'
                ></path>
              </g>
            </svg>
            <h1 className='hidden text-2xl font-bold md:block'>codedamn</h1>
          </Link>
        </div>

        <div className='flex items-center gap-9'>
          <div className='hidden md:block'>
            <SearchBox />
          </div>
          <div className='flex items-center gap-9'>
            <Streak currentStreak={currentstreak} />
            <Notification notificationCount={notificationCount} />
          </div>
          <ProfileMenu
            image={image}
            imageAlt={imageAlt}
            level={level}
            size='small'
          />
        </div>
      </nav>
      {showAside && <Aside closeAside={closeAside} />}
    </>
  );
}

export default Navbar;
