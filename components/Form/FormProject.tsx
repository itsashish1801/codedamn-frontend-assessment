import { Project } from '@/interfaces/sections';
import SectionHeader from '../Standalone/SectionHeader';

import { convertToId } from '@/utils/helperFunctions';
import { ProjectCard } from '../Profile/Portfolio/Projects';
import { CheckIcon } from '@heroicons/react/24/outline';

function FormProject({ projects }: { projects: Project[] }) {
  return (
    <section>
      <SectionHeader
        title='Projects'
        href='#'
        linkText='See all'
        variant='secondary'
      />

      <div className='grid grid-cols-2 gap-5 mt-6'>
        {projects.map((project) => (
          <div key={project.title} className='relative'>
            <input
              type='checkbox'
              id={convertToId(project.title)}
              className='hidden peer'
            />
            <div className='absolute hidden w-5 h-5 bg-indigo-600 rounded-full -right-2 -top-3 peer-checked:inline-flex peer-checked:items-center peer-checked:justify-center'>
              <CheckIcon className='w-3.5 h-3.5 text-white stroke-2' />
            </div>
            <label
              htmlFor={convertToId(project.title)}
              className='inline-block rounded-lg peer-checked:ring-2 peer-checked:ring-indigo-600'
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                technologies={project.technologies}
              />
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FormProject;
