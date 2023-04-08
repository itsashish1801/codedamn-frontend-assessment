import SectionHeader from '@/components/Standalone/SectionHeader';
import { Tag } from '@/components/Standalone/Tags';

function Interests({ interests }: { interests: string[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader title='Interests' />
      <div className='flex flex-wrap gap-5 mt-6'>
        {interests.map((interest) => (
          <Tag
            text={interest}
            key={interest}
            className='bg-zinc-50 ring-1 ring-inset ring-zinc-100'
          />
        ))}
      </div>
    </section>
  );
}

export default Interests;
