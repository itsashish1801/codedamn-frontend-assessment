import { Button } from '@/interfaces/buttons';
import { Icon } from '@/interfaces/helpers';
import { useState } from 'react';

export function Button({
  children,
  variant = 'primary',
  clickHandler,
}: Button) {
  return (
    <button
      onClick={clickHandler}
      className={`py-2.5 px-4 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 ${
        variant === 'primary'
          ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-offset-1 focus:ring-indigo-300 '
          : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-500'
      }`}
    >
      {children}
    </button>
  );
}

export function ButtonIcon({ Icon }: Icon) {
  const [bookmark, setBookmark] = useState(false);

  return (
    <button
      onClick={() => setBookmark(!bookmark)}
      className='p-3 rounded-lg bg-zinc-100 text-zin-900 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500'
    >
      <Icon
        className={`w-4 h-4 stroke-2 ${bookmark ? 'fill-slate-900' : ''}`}
      />
    </button>
  );
}

export function FileInput() {
  return (
    <label className='block'>
      <span className='sr-only'>Choose profile photo</span>
      <input
        type='file'
        className='w-28 text-sm text-zinc-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-none file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 '
      />
    </label>
  );
}

export function LoadingButton() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <button
        disabled
        type='button'
        className='py-2.5 px-5 mr-2 text-sm font-medium text-zinc-900 bg-white rounded-lg border border-zinc-200 hover:bg-zinc-100 hover:text-indigo-600 focus:z-10 focus:ring-2 focus:ring-indigo-600 focus:text-indigo-600 inline-flex items-center'
      >
        <svg
          aria-hidden='true'
          role='status'
          className='inline w-4 h-4 mr-3 text-zinc-200 animate-spin'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='#4f46e5'
          />
        </svg>
        Loading User Data...
      </button>
    </div>
  );
}
