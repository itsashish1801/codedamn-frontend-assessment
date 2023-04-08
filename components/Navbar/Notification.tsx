import { BellIcon } from '@heroicons/react/24/outline';

function Notification({ notificationCount }: { notificationCount: number }) {
  return (
    <button className='relative inline-block'>
      <BellIcon className='w-6 h-6 text-zinc-500' />
      <div className='h-4 w-4 bg-pink-500 rounded-full text-xs font-bold text-white inline-flex justify-center items-center absolute -top-1.5 -right-1'>
        {notificationCount}
      </div>
    </button>
  );
}

export default Notification;
