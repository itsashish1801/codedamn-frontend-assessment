import Image from 'next/image';

import { Education } from '@/interfaces/sections';

import { formatDate } from '@/utils/helperFunctions';

import SectionHeader from '@/components/Standalone/SectionHeader';

function Education({ educations }: { educations: Education[] }) {
  return (
    <section className='mt-12'>
      <SectionHeader title='Education' />
      <div className='flex flex-col-reverse gap-5 mt-6'>
        {educations.map((education) => (
          <EducationCard
            key={education.degree}
            institutionName={education.institutionName}
            institutionImage={education.institutionImage}
            institutionLocation={education.institutionLocation}
            startDate={education.startDate}
            endDate={education.endDate}
            degree={education.degree}
            description={education.description}
          />
        ))}
      </div>
    </section>
  );
}

function EducationCard({
  institutionName,
  institutionImage,
  institutionLocation,
  degree,
  startDate,
  endDate,
  description,
}: Education) {
  return (
    <div className='flex p-6 rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-100'>
      <Image
        src={institutionImage}
        alt={institutionName}
        unoptimized
        width={40}
        height={40}
        className='flex-shrink-0 w-10 h-10 mt-1'
      />
      <div className='ml-4'>
        <h4 className='text-lg font-semibold'>{institutionName}</h4>
        <div className='flex items-end justify-between'>
          <div className='flex items-center gap-2 mt-1'>
            <span>{institutionLocation}</span>
            <div className='w-1 h-1 rounded-full bg-zinc-600' />
            <span>{degree}</span>
          </div>
          <span className='font-semibold'>{`${formatDate(startDate)} - ${
            endDate ? formatDate(endDate) : 'Present'
          }`}</span>
        </div>
        <p className='mt-6 leading-relaxed text-zinc-500'>{description}</p>
      </div>
    </div>
  );
}

export default Education;
