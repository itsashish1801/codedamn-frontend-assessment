import { MapPinIcon } from '@heroicons/react/24/outline';

import BasicDetails from '@/interfaces/sections';

import { Tag } from '../../Standalone/Tags';

const BasicDetails = ({
  name,
  bio,
  location,
  isPro,
  lookingForJob,
}: BasicDetails) => {
  return (
    <div>
      <div className='flex flex-col-reverse items-start gap-2 sm:flex-row sm:items-center sm:gap-3'>
        <h2 className='text-[1.75rem] font-bold text-zinc-900 whitespace-nowrap'>
          {name}
        </h2>
        <div className='flex gap-3'>
          {isPro && <Tag text='Pro' variant='color' color='success' />}
          {lookingForJob && <Tag text='Looking for job' variant='color' />}
        </div>
      </div>

      <p className='mt-1.5 text-zinc-500'>{bio}</p>

      <p className='inline-flex items-center mt-1.5 text-zinc-500'>
        <MapPinIcon className='w-4 h-4' />
        <span className='ml-1'>{location}</span>
      </p>
    </div>
  );
};

export default BasicDetails;
