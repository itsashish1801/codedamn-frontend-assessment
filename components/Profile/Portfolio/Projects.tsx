import Image from 'next/image';

import { Project } from '@/interfaces/sections';

import SectionHeader from '@/components/Standalone/SectionHeader';
import { CategoryTag } from '@/components/Standalone/Tags';

function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader title='Projects' linkText='Create new project' href='#' />

      <div className='grid gap-5 mt-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export function ProjectCard({ title, image, technologies }: Project) {
  return (
    <div className='p-4 rounded-lg cursor-pointer bg-zinc-50 ring-1 ring-inset ring-zinc-100 hover:bg-zinc-100'>
      <Image
        src={image}
        alt={title}
        width={327}
        height={170}
        className='rounded shadow-sm ring-1 ring-zinc-200'
      />
      <h4 className='mt-5 text-lg font-bold'>{title}</h4>
      <div className='flex items-center gap-2 mt-2 text-zinc-500'>
        <CategoryTag
          category={technologies.at(0)?.name!}
          image={technologies.at(0)?.image}
        />
        <div className='w-1 h-1 rounded-full bg-zinc-600' />
        <CategoryTag
          category={technologies.at(1)?.name!}
          image={technologies.at(1)?.image}
        />
      </div>
    </div>
  );
}

export default Projects;
