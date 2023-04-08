import { BoltIcon } from '@heroicons/react/24/solid';

function Streak({ currentStreak }: { currentStreak: number }) {
  return (
    <button className='inline-flex items-center'>
      <BoltIcon className='w-6 h-6 fill-indigo-500' />
      <span className='ml-1 font-extrabold text-zinc-500'>{currentStreak}</span>
    </button>
  );
}

export default Streak;
