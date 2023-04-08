import Link from 'next/link';

import { Navbar } from '@/interfaces/sections';

import SearchBox from './SearchBox';
import Streak from './Streak';
import Notification from './Notification';
import Avatar from '../Standalone/Avatar';

function Navbar({
  currentstreak,
  notificationCount,
  image,
  imageAlt,
  level,
}: Navbar) {
  return (
    <header>
      <nav className='flex items-center justify-between py-5'>
        <Link href='/'>
          <h1 className='text-2xl font-bold'>codedamn</h1>
        </Link>

        <div className='flex gap-9'>
          <SearchBox />
          <div className='flex items-center gap-9'>
            <Streak currentStreak={currentstreak} />
            <Notification notificationCount={notificationCount} />
          </div>
          <Avatar
            image={image}
            imageAlt={imageAlt}
            level={level}
            size='small'
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
