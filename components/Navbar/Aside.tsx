import { Popover, Transition } from '@headlessui/react';
import { ArrowPathIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import SearchBox from './SearchBox';

function Aside() {
  const navLinks = [
    { text: 'Profile', href: '/update-profile' },
    { text: 'Socials', href: '/update-socials' },
    { text: 'Portfolio', href: '/update-portfolio' },
    { text: 'Resume', href: '/update-resume' },
  ];

  return (
    <div>
      <Popover className='relative'>
        {({ open, close }) => (
          <>
            <Popover.Button className='inline-flex items-center justify-center flex-shrink-0 p-2 md:hidden'>
              <span className='sr-only'>Close Menu</span>
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
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-300'
              enterFrom='opacity-0 -translate-x-full'
              enterTo='opacity-100 translate-x-0'
              leave='transition ease-in duration-300'
              leaveFrom='opacity-100 translate-x-0'
              leaveTo='opacity-0 -translate-x-full'
            >
              <Popover.Panel
                as='aside'
                className='fixed inset-0 z-50 w-full h-screen px-4 py-3 overflow-hidden bg-zinc-50'
              >
                <Popover.Button className='inline-flex items-center justify-center flex-shrink-0 p-2 mt-1.5 md:hidden'>
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
                </Popover.Button>

                <nav>
                  <ul className='mt-6'>
                    <li>
                      <Link
                        onClick={close}
                        href='/profile'
                        className='flex items-center px-2 py-4 font-medium gap-x-2 text-zinc-600 hover:underline focus:underline active:underline'
                      >
                        <UserIcon className='w-5 h-5' />
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li>
                      <div>
                        <h3 className='flex items-center px-2 pt-4 font-semibold gap-x-2'>
                          <ArrowPathIcon className='w-5 h-5' />
                          <span>Update</span>
                        </h3>
                        <ul className='flex flex-col mt-4 font-medium list-disc gap-y-3 text-zinc-600'>
                          {navLinks.map((navLink) => (
                            <Link
                              onClick={close}
                              key={navLink.text}
                              href={navLink.href}
                              className='ml-12 list-item hover:underline focus:underline active:underline'
                            >
                              {navLink.text}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div className='mt-12'>
                  <SearchBox />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default Aside;
