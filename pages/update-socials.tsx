import { ReactElement } from 'react';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import { TextInput } from '@/components/Standalone/Inputs';
import { Button } from '@/components/Standalone/Buttons';

function UpdateSocials() {
  return (
    <form className='flex flex-col w-full gap-4 px-16'>
      <TextInput label='Github' placeholder='Github profile URL' />
      <TextInput label='Linkedin' placeholder='Linkedin profile URL' />
      <TextInput label='Facebook' placeholder='Facebook profile URL' />
      <TextInput label='Instagram' placeholder='Instgram profile URL' />
      <TextInput label='Dribbble' placeholder='Dribbble profile URL' />
      <TextInput label='Behance' placeholder='Behance profile URL' />

      <div className='flex justify-end gap-3 mt-10'>
        <Button variant='secondary'>Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </form>
  );
}

UpdateSocials.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutWithSidebar>{page}</LayoutWithSidebar>
    </Layout>
  );
};

export default UpdateSocials;
