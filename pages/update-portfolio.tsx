import { ReactElement } from 'react';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Playground, Project } from '@/interfaces/sections';

import { Button } from '@/components/Standalone/Buttons';
import FormProject from '@/components/Form/FormProject';
import FormPlayground from '@/components/Form/FormPlayground';

interface Props {
  projects: Project[];
  playgrounds: Playground[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [playgroundsRes, projectsRes] = await Promise.all([
    fetch(
      'https://codedamn-frontend-assessment.vercel.app/api/user/playgrounds'
    ),
    fetch('https://codedamn-frontend-assessment.vercel.app/api/user/projects'),
  ]);

  const playgrounds: Playground[] = await playgroundsRes.json();
  const projects: Project[] = await projectsRes.json();

  return {
    props: {
      playgrounds,
      projects,
    },
  };
};

function UpdatePortfolio({
  playgrounds,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <form className='w-full md:px-16'>
      <FormPlayground playgrounds={playgrounds} />
      <FormProject projects={projects} />

      <div className='flex justify-end gap-3 mt-10'>
        <Button variant='secondary'>Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </form>
  );
}

UpdatePortfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutWithSidebar>{page}</LayoutWithSidebar>
    </Layout>
  );
};

export default UpdatePortfolio;
