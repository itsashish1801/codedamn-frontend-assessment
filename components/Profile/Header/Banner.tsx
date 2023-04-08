import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { Avatar } from '@/interfaces/avatar';

import AvatarComponent from '../../Standalone/Avatar';

function Banner({ image, imageAlt, level }: Avatar) {
  return (
    <div className='relative w-full h-44 bg-gradient-to-tr from-cyan-500 to-indigo-600'>
      <EditButton />
      <div className='absolute top-28 left-6'>
        <AvatarComponent image={image} level={level} imageAlt={imageAlt} />
      </div>
    </div>
  );
}

function EditButton() {
  return (
    <button className='absolute inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-br from-zinc-100/10 to-zinc-100/30 ring-1 ring-zinc-100 ring-opacity-30 hover:ring-opacity-75 focus:outline-none focus:ring-zinc-100 focus:ring-offset-1 active:ring-zinc-100 backdrop-blur-sm top-6 right-6'>
      <PencilSquareIcon className='w-4 h-4 text-white stroke-2' />
      <span className='ml-2 text-xs font-semibold text-white'>Edit cover</span>
    </button>
  );
}

export default Banner;
