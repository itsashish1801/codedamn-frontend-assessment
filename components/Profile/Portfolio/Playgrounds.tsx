import Image from 'next/image';

import { Playground } from '@/interfaces/sections';

import { CategoryTag } from '@/components/Standalone/Tags';
import SectionHeader from '@/components/Standalone/SectionHeader';

function Playgrounds({ playgrounds }: { playgrounds: Playground[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader
        title='Playgrounds'
        linkText='Create new playground'
        href='#'
      />

      <div className='grid grid-cols-2 gap-5 mt-6'>
        {playgrounds.map((playground) => (
          <PlaygroundCard
            key={playground.title}
            title={playground.title}
            lastModified={playground.lastModified}
            technology={playground.technology}
            friends={playground.friends}
          />
        ))}
      </div>
    </section>
  );
}

function PlaygroundCard({
  title,
  lastModified,
  technology,
  friends,
}: Playground) {
  return (
    <div className='flex items-start gap-4 p-4 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-100'>
      <Image
        src={technology.image}
        alt={technology.name}
        width={40}
        height={40}
        className='mt-1.5'
      />

      <div>
        <h5 className='text-lg font-semibold'>{title}</h5>
        <div className='flex items-center gap-2 mt-1 text-zinc-500'>
          <CategoryTag category={technology.name} />
          <div className='w-1 h-1 rounded-full bg-zinc-600' />
          <CategoryTag
            category={`${lastModified} min ago`}
            className='lowercase'
          />
        </div>

        <div className='flex items-center mt-2'>
          <Image
            src={friends.at(0)?.image!}
            alt={friends.at(0)?.name!}
            width={24}
            height={24}
            className='rounded-full ring-1 ring-zinc-50'
            unoptimized
          />
          <Image
            src={friends.at(1)?.image!}
            alt={friends.at(1)?.name!}
            width={24}
            height={24}
            className='-ml-1 rounded-full ring-1 ring-zinc-50'
            unoptimized
          />
          <span className='ml-2 text-xs text-zinc-500'>
            Shared with <span className='font-bold'>{friends.at(0)?.name}</span>
            , <span className='font-bold'>{friends.at(1)?.name}</span> +
            {friends.length} more
          </span>
        </div>
      </div>
    </div>
  );
}

export default Playgrounds;
