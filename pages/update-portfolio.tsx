import { ReactElement } from 'react';
import useSWR, { Fetcher, preload } from 'swr';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import { Playground, Project } from '@/interfaces/sections';
import Error from '@/components/Standalone/Error';
import { LoadingButton } from '@/components/Standalone/Buttons';
import FormProject from '@/components/Form/FormProject';
import FormPlayground from '@/components/Form/FormPlayground';

function UpdatePortfolio() {
  const projectfetcher: Fetcher<Project[]> = (url: string) =>
    fetch(url).then((res) => res.json());

  const playgroundfetcher: Fetcher<Playground[]> = (url: string) =>
    fetch(url).then((res) => res.json());

  preload('/api/user/projects', projectfetcher);
  preload('/api/user/playgrounds', playgroundfetcher);

  const {
    data: projects,
    error: projectsError,
    isLoading: loadingProjects,
  } = useSWR<Project[], Error>('/api/user/projects', projectfetcher);

  const {
    data: playgrounds,
    error: playgroundsError,
    isLoading: loadingPlaygrounds,
  } = useSWR<Playground[], Error>('/api/user/playgrounds', playgroundfetcher);

  if (projectsError || playgroundsError)
    return <Error message='Failed to load data' />;

  if (loadingPlaygrounds || loadingProjects) return <LoadingButton />;

  if (!projects || !playgrounds)
    return <Error message='There is no such result matching your query.' />;

  return (
    <form className='px-16'>
      <FormPlayground playgrounds={playgrounds} />
      <FormProject projects={projects} />
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
