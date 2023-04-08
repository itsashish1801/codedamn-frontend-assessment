import { Technology } from '@/interfaces/sections';

import SectionHeader from '@/components/Standalone/SectionHeader';
import { TagWithIcon } from '@/components/Standalone/Tags';

function TechSkills({ techSkills }: { techSkills: Technology[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader title='Tech Skills' />
      <div className='flex flex-wrap gap-5 mt-6'>
        {techSkills.map((techSkill) => (
          <TagWithIcon
            key={techSkill.name}
            text={techSkill.name}
            image={techSkill.image}
          />
        ))}
      </div>
    </section>
  );
}

export default TechSkills;
