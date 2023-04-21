import { ReactElement } from 'react';
import useSWR, { Fetcher, preload } from 'swr';

import { Technology } from '@/interfaces/sections';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import Error from '@/components/Standalone/Error';
import { Button, LoadingButton } from '@/components/Standalone/Buttons';
import FormTechSkills from '@/components/Form/FormTechSkills';

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
