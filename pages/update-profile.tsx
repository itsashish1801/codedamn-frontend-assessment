import { ReactElement } from 'react';
import Image from 'next/image';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import me from '../public/me.webp';
import {
  DateInput,
  SelectInput,
  TextAreaInput,
  TextInput,
} from '@/components/Standalone/Inputs';
import VisibilityToggler from '@/components/Form/VisibilityToggler';
import { Button, FileInput } from '@/components/Standalone/Buttons';
import Selectbox from '@/components/Form/Selectbox';

function UpdateProfile() {
  return (
    <form className='w-full px-16'>
      <div className='flex items-center gap-6'>
        <Image
          priority
          className='h-[4.5rem] w-[4.5rem] rounded-full'
          src={me}
          alt='Picture of Ashish'
        />
        <FileInput />
        <Button variant='secondary'>Remove</Button>
      </div>

      <div className='flex flex-col gap-6 mt-10'>
        <div>
          <TextInput label='Display Name' placeholder='Ashish Sharma' />
          <p className='mt-2 text-sm text-zinc-500'>
            Name entered above will be used for all issued certificates
          </p>
        </div>
        <TextAreaInput
          label='About'
          placeholder='Write something about yourself here.'
        />

        <Selectbox
          options={[
            'Student',
            'Designer',
            'Frontend Developer',
            'Backend Developer',
            'Data Scientist',
            'Other',
          ]}
          label='Profession'
        />

        <DateInput label='Date of birth' />

        <Selectbox
          options={['Male', 'Female', 'Custom', 'Rather not say']}
          label='Gender'
        />
      </div>

      <div className='mt-10'>
        <h3 className='text-xl font-bold'>Section Visibility</h3>
        <p className='mt-1 text-zinc-500'>
          Select which sections and content should show on your profile page.
        </p>

        <div className='flex flex-col gap-4 p-6 mt-6 rounded-2xl bg-zinc-50'>
          <VisibilityToggler
            title='Followers and following'
            description='Shows your followers and the users you follow on codedamn'
            label='Toggle followers and following visibility'
          />
          <VisibilityToggler
            title='XP'
            description='Shows the XP you have earned'
            label='Toggle XP visibility'
          />
          <VisibilityToggler
            title='Achievement badges'
            description='Shows your relative percentile and proficiency'
            label='Toggle achievement badges'
          />
        </div>
      </div>

      <div className='flex justify-end gap-3 mt-10'>
        <Button variant='secondary'>Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </form>
  );
}

UpdateProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutWithSidebar>{page}</LayoutWithSidebar>
    </Layout>
  );
};

export default UpdateProfile;
