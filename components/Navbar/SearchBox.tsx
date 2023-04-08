import { useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import SearchBoxMenu from './SearchBoxMenu';

function SearchBox() {
  const [hasFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => {
        inputRef.current?.focus();
      }}
      className={`w-[23rem] border border-zinc-200 flex items-center cursor-text p-1.5 rounded-lg ${
        hasFocus ? 'border-zinc-900 ring-1 ring-zinc-200' : ''
      }`}
    >
      <MagnifyingGlassIcon className='w-4 h-4 ml-2 outline-none stroke-2 text-zinc-500' />
      <form className='flex-1'>
        <input
          type='text'
          ref={inputRef}
          placeholder='Search'
          className='p-0 mx-2 font-medium border-none focus:ring-0 placeholder:text-zinc-500 text-zinc-700 focus:outline-none'
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </form>
      <SearchBoxMenu />
    </div>
  );
}

export default SearchBox;
