import Image from 'next/image';

import lightning from '../../../public/Lightning.svg';
import star from '../../../public/StarFour.svg';
import cup from '../../../public/cup.svg';
import heartbeat from '../../../public/Heartbeat.svg';

import { Stats } from '@/interfaces/sections';
import Stat from '@/interfaces/stat';

import SectionHeader from '@/components/Standalone/SectionHeader';

function Stats({ stats }: { stats: Stats }) {
  return (
    <section className='mt-10'>
      <SectionHeader title='Stats' />
      <div className='grid gap-5 mt-6 sm:grid-cols-2'>
        <StatCard
          title={stats.longestStreak}
          subtitle='Longest streak'
          image={lightning}
          imageAlt='Lightning icon'
        />
        <StatCard
          title={stats.experiencePoints}
          subtitle='Experience points'
          image={star}
          imageAlt='Star icon'
        />
        <StatCard
          title={stats.currentLeague}
          subtitle='Current league'
          image={cup}
          imageAlt='Cup icon'
        />
        <StatCard
          title={stats.karmaPoints}
          subtitle='Karma points'
          image={heartbeat}
          imageAlt='Heartbeat icon'
        />
      </div>
    </section>
  );
}

function StatCard({ title, subtitle, image, imageAlt }: Stat) {
  return (
    <div className='flex items-center px-3 py-2 bg-zinc-50 rounded-xl ring-1 ring-zinc-100 ring-inset'>
      <Image src={image} alt={imageAlt} />
      <div className='flex flex-col ml-2.5'>
        <span className='text-xl font-bold'>{title}</span>
        <span className='text-zinc-500'>{subtitle}</span>
      </div>
    </div>
  );
}

export default Stats;
