import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import {
  CogIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

import AvatarComponent from '../Standalone/Avatar';
import { Avatar } from '@/interfaces/avatar';
import Link from 'next/link';

function ProfileMenu({ image, imageAlt, level, size = 'big' }: Avatar) {
  const items = [
    { text: 'Update Profile', icon: CogIcon, href: '/update-profile' },
    { text: 'Log out', icon: ArrowRightOnRectangleIcon, href: '#' },
  ];

  return (
    <div className='translate-y-0.5'>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button>
          <AvatarComponent
            image={image}
            imageAlt={imageAlt}
            level={level}
            size='small'
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 w-40 mt-2.5 origin-top-right divide-y rounded-md shadow-lg bg-zinc-50 divide-zinc-200 ring-1 ring-zinc-800 ring-opacity-10 focus:outline-none z-50'>
            {items.map((item) => (
              <div className='px-1 py-1' key={item.text}>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={`${
                        active ? 'bg-zinc-200' : ''
                      } group text-zinc-900 flex w-full items-center rounded-lg px-3 py-2 text-sm`}
                    >
                      <item.icon className='w-4 h-4 mr-1.5 text-inherit' />
                      <span>{item.text}</span>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
