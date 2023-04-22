import { ReactElement } from 'react';

import { Technology } from '@/interfaces/sections';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';

import { Button } from '@/components/Standalone/Buttons';
import FormTechSkills from '@/components/Form/FormTechSkills';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps<{
  technologies: Technology[];
}> = async () => {
  const res = await fetch(
    'https://codedamn-frontend-assessment.vercel.app/api/user/tech-skills'
  );
  const technologies: Technology[] = await res.json();

  return {
    props: {
      technologies,
    },
  };
};

function UpdateResume({
  technologies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <form className='md:px-16'>
      <FormTechSkills techSkills={technologies} />

      <div className='flex justify-end gap-3 mt-10'>
        <Button variant='secondary'>Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </form>
  );
}

UpdateResume.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutWithSidebar>{page}</LayoutWithSidebar>
    </Layout>
  );
};

export default UpdateResume;
