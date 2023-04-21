import { Playground } from '@/interfaces/sections';
import SectionHeader from '../Standalone/SectionHeader';
import { convertToId } from '@/utils/helperFunctions';
import { CheckIcon } from '@heroicons/react/24/outline';
import { PlaygroundCard } from '../Profile/Portfolio/Playgrounds';

function FormPlayground({ playgrounds }: { playgrounds: Playground[] }) {
  return (
    <section>
      <SectionHeader
        title='Playgrounds'
        href='#'
        linkText='See all'
        variant='secondary'
      />

      <div className='grid gap-5 mt-6 sm:grid-cols-2'>
        {playgrounds.map((playground) => (
          <div key={playground.title} className='relative'>
            <input
              type='checkbox'
              id={convertToId(playground.title)}
              className='hidden peer'
            />
            <div className='absolute hidden w-5 h-5 bg-indigo-600 rounded-full -right-2 -top-3 peer-checked:inline-flex peer-checked:items-center peer-checked:justify-center'>
              <CheckIcon className='w-3.5 h-3.5 text-white stroke-2' />
            </div>
            <label
              htmlFor={convertToId(playground.title)}
              className='inline-block rounded-lg peer-checked:ring-2 peer-checked:ring-indigo-600'
            >
              <PlaygroundCard
                key={playground.title}
                title={playground.title}
                lastModified={playground.lastModified}
                technology={playground.technology}
                friends={playground.friends}
              />
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FormPlayground;
