import Image from 'next/image';

import polygon from '../../public/polygon.svg';

import { UserLevelIndicator } from '@/interfaces/avatar';

function UserLevelIndicator({ size, level }: UserLevelIndicator) {
  return size === 'small' ? (
    <div className='absolute -top-4 left-3.5'>
      <div className='relative'>
        <div className='h-14 w-14'>
          <Image src={polygon} priority alt='Image of a polygon' />
        </div>
        <span className='absolute font-bold text-white text-sm top-[16px] left-[23.5px]'>
          {level}
        </span>
      </div>
    </div>
  ) : (
    <div className='absolute -bottom-8 -right-6'>
      <div className='relative'>
        <Image
          src={polygon}
          priority
          alt='Image of a polygon'
          className='w-auto h-[5.5rem]'
        />
        <span className='absolute font-bold text-white text-lg top-[27px] left-[38px]'>
          {level}
        </span>
      </div>
    </div>
  );
}

export default UserLevelIndicator;
