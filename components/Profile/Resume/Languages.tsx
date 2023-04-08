import { Language } from '@/interfaces/sections';

import SectionHeader from '@/components/Standalone/SectionHeader';
import { TagWithIcon } from '@/components/Standalone/Tags';

function Languages({ languages }: { languages: Language[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader title='Languages' />
      <div className='flex flex-row-reverse flex-wrap justify-end gap-5 mt-6'>
        {languages.map((language) => (
          <TagWithIcon
            key={language.name}
            text={language.name}
            image={language.flagImage}
            width={20}
            height={20}
          />
        ))}
      </div>
    </section>
  );
}

export default Languages;
