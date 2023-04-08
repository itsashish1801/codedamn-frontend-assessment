import { ReactElement } from 'react';
import useSWR, { Fetcher, preload } from 'swr';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import { Playground, Project } from '@/interfaces/sections';
import Error from '@/components/Standalone/Error';
import { LoadingButton } from '@/components/Standalone/Buttons';
import Projects from '@/components/Profile/Portfolio/Projects';

function UpdatePortfolio() {
  const fetcher: Fetcher<Project[]> = (url: string) =>
    fetch(url).then((res) => res.json());

  preload('/api/user/projects', fetcher);

  const {
    data: projects,
    error,
    isLoading,
  } = useSWR<Project[], Error>('/api/user/projects', fetcher);

  if (error) return <Error message={error.message} />;
  if (isLoading) return <LoadingButton />;
  if (!projects)
    return <Error message='There is no such result matching your query.' />;

  return (
    <form className='px-16 -mt-12'>
      <Projects projects={projects} />
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
