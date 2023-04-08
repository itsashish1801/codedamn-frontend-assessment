import { ReactElement } from 'react';
import useSWR, { Fetcher, preload } from 'swr';

import { Technology } from '@/interfaces/sections';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import Error from '@/components/Standalone/Error';
import { LoadingButton } from '@/components/Standalone/Buttons';
import TechSkills from '@/components/Profile/Resume/TechSkills';

function UpdateResume() {
  const fetcher: Fetcher<Technology[]> = (url: string) =>
    fetch(url).then((res) => res.json());

  preload('/api/user/tech-skills', fetcher);

  const {
    data: technologies,
    error,
    isLoading,
  } = useSWR<Technology[], Error>('/api/user/tech-skills', fetcher);

  if (error) return <Error message={error.message} />;
  if (isLoading) return <LoadingButton />;
  if (!technologies)
    return <Error message='There is no such result matching your query.' />;

  return (
    <form className='px-16 -mt-12'>
      <TechSkills techSkills={technologies} />
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
