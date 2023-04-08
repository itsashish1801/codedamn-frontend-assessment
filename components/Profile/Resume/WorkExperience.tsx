import Image from 'next/image';

import { WorkExperience } from '@/interfaces/sections';

import { formatDate } from '@/utils/helperFunctions';

import SectionHeader from '@/components/Standalone/SectionHeader';

function WorkExperience({ experiences }: { experiences: WorkExperience[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader title='Work Experience' />
      <div className='flex flex-col-reverse gap-5 mt-6'>
        {experiences.map((experience) => (
          <WorkExperienceCard
            key={experience.role}
            role={experience.role}
            employer={experience.employer}
            employerImage={experience.employerImage}
            location={experience.location}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  );
}

function WorkExperienceCard({
  role,
  employer,
  employerImage,
  location,
  startDate,
  endDate,
  description,
  responsibilities,
}: WorkExperience) {
  return (
    <div className='flex p-6 rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-100'>
      <Image
        src={employerImage}
        alt={employer}
        unoptimized
        width={40}
        height={40}
        className='flex-shrink-0 w-10 h-10 mt-1'
      />
      <div className='ml-4'>
        <h4 className='text-lg font-semibold'>{role}</h4>
        <div className='flex items-end justify-between'>
          <div className='flex items-center gap-2 mt-1'>
            <span>{location}</span>
            <div className='w-1 h-1 rounded-full bg-zinc-600' />
            <span>{employer}</span>
          </div>
          <span className='font-semibold'>{`${formatDate(startDate)} - ${
            endDate ? formatDate(endDate) : 'Present'
          }`}</span>
        </div>
        <p className='mt-6 leading-relaxed text-zinc-500'>{description}</p>
        {responsibilities && responsibilities.length > 1 && (
          <div className='mt-5'>
            <span className='font-semibold'>Job responsibilities:</span>
            <ul className='flex flex-col gap-1 mt-2'>
              {responsibilities.map((responsibility) => (
                <li className='flex items-center gap-2' key={responsibility}>
                  <div className='w-2 h-2 rotate-45 bg-indigo-500 rounded-sm' />
                  <span className='text-zinc-500'>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
