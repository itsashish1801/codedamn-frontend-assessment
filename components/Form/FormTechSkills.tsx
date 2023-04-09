import { Technology } from '@/interfaces/sections';
import SectionHeader from '../Standalone/SectionHeader';
import { convertToId } from '@/utils/helperFunctions';
import { CheckIcon } from '@heroicons/react/24/outline';
import { TagWithIcon } from '../Standalone/Tags';

function FormTechSkills({ techSkills }: { techSkills: Technology[] }) {
  return (
    <section>
      <SectionHeader
        title='Tech Skills'
        href='#'
        linkText='See all'
        variant='secondary'
      />
      <div className='flex flex-wrap gap-5 mt-6'>
        {techSkills.map((techSkill) => (
          <div key={techSkill.name} className='relative'>
            <input
              type='checkbox'
              id={convertToId(techSkill.name)}
              className='hidden peer'
            />
            <div className='absolute hidden w-4 h-4 bg-indigo-600 rounded-full -right-2 -top-2 peer-checked:inline-flex peer-checked:items-center peer-checked:justify-center'>
              <CheckIcon className='w-2.5 h-2.5 text-white stroke-2' />
            </div>
            <label
              htmlFor={convertToId(techSkill.name)}
              className='inline-block rounded-lg cursor-pointer peer-checked:ring-2 peer-checked:ring-indigo-600'
            >
              <TagWithIcon
                key={techSkill.name}
                text={techSkill.name}
                image={techSkill.image}
              />
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FormTechSkills;
