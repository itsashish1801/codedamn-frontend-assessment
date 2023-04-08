import { Button } from '@/interfaces/buttons';
import { Icon } from '@/interfaces/helpers';

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
  return (
    <button className='p-3 rounded-lg bg-zinc-100 text-zin-900 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500'>
      <Icon className='w-4 h-4 stroke-2' />
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
