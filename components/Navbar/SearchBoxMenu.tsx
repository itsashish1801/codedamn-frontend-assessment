import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import {
  ChevronDownIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

function SearchBoxMenu() {
  const [selectedItem, setSelectedItem] = useState('Courses');

  const items = [
    { text: 'Courses', icon: AcademicCapIcon },
    { text: 'Projects', icon: CodeBracketIcon },
    { text: 'Users', icon: UserIcon },
  ];

  return (
    <div>
      <Menu as='div' className='relative inline-block mr-2 text-left md:mr-0'>
        <div>
          <Menu.Button className='inline-flex items-center w-full px-2 py-1 text-sm rounded-lg group bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500'>
            {selectedItem}
            <ChevronDownIcon
              className='h-3.5 w-3.5 text-zinc-500 ml-1.5 group-hover:text-zinc-600'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

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
                    <button
                      onClick={() => setSelectedItem(item.text)}
                      className={`${
                        active ? 'bg-zinc-200' : ''
                      } group text-zinc-900 flex w-full items-center rounded-lg px-3 py-2 text-sm`}
                    >
                      <item.icon className='w-4 h-4 mr-1.5 text-inherit' />
                      <span>{item.text}</span>
                    </button>
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

export default SearchBoxMenu;
