import SectionHeader from '@/components/Standalone/SectionHeader';

function About({ about }: { about: string }) {
  return (
    <section className='mt-10'>
      <SectionHeader title='About me' />
      <div className='p-6 mt-6 leading-relaxed bg-zinc-50 rounded-2xl ring-1 ring-inset ring-zinc-100'>
        <p className='font-medium whitespace-pre-line'>{about}</p>
      </div>
    </section>
  );
}

export default About;
