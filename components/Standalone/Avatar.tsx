import Image from 'next/image';

import { Avatar } from '@/interfaces/avatar';

import UserLevelIndicator from './UserLevelIndicator';

function Avatar({ image, imageAlt, level, size = 'big' }: Avatar) {
  return (
    <div className='relative inline-block'>
      <Image
        src={image}
        unoptimized
        priority
        width={140}
        height={140}
        alt={imageAlt}
        className={`rounded-full ${
          size === 'small'
            ? 'h-[2.625rem] w-[2.625rem]'
            : 'w-[8.75rem] h-[8.75rem] border-2 border-white'
        }`}
      />
      <UserLevelIndicator size={size} level={level} />
    </div>
  );
}

export default Avatar;
