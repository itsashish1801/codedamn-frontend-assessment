import { Technology } from '@/interfaces/sections';

import { Tag } from '../../Standalone/Tags';

function HighlightedSkills({ skills }: { skills: Technology[] }) {
  return (
    <div className='flex flex-wrap gap-3 py-8'>
      {skills.map((skill) => (
        <Tag text={skill.name} key={skill.name} className='text-sm' />
      ))}
    </div>
  );
}

export default HighlightedSkills;
