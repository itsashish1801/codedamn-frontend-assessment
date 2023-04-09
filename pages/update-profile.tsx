import { ReactElement } from 'react';
import Image from 'next/image';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import {
  DateInput,
  TextAreaInput,
  TextInput,
} from '@/components/Standalone/Inputs';
import { Button, FileInput } from '@/components/Standalone/Buttons';

import Selectbox from '@/components/Form/Selectbox';
import VisibilityToggler from '@/components/Form/VisibilityToggler';

interface ProfileForm {
  displayname: string;
  about: string;
  profession: string;
  dateofbirth: string;
  gender: string;
  showfollowers: boolean;
  showxp: boolean;
  showachievements: boolean;
}

const ProfileFormSchema = Yup.object().shape({
  displayname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This is a required field'),
});

function UpdateProfile() {
  const initialValues: ProfileForm = {
    displayname: '',
    about: '',
    profession: 'Student',
    dateofbirth: '',
    gender: 'Male',
    showfollowers: false,
    showxp: false,
    showachievements: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={ProfileFormSchema}
    >
      {({ errors, touched }) => (
        <Form className='w-full px-16'>
          <div className='flex items-center gap-6'>
            <Image
              width={72}
              height={72}
              className='rounded-full'
              src='https://res.cloudinary.com/dpoftt83y/image/upload/v1680852539/codedamn-frontend-assessment/shubham_nb7jfa.webp'
              alt='Picture of A person'
            />
            <FileInput />
            <Button variant='secondary'>Remove</Button>
          </div>

          <div className='flex flex-col gap-6 mt-10'>
            <div>
              <TextInput
                label='Display Name'
                placeholder='Ashish Sharma'
                error={
                  errors.displayname && touched.displayname
                    ? errors.displayname
                    : ''
                }
              />
              <p className='mt-2 text-sm text-zinc-500'>
                Name entered above will be used for all issued certificates
              </p>
            </div>

            <TextAreaInput
              label='About'
              placeholder='Write something about yourself here.'
              error={errors.about && touched.about ? errors.about : ''}
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

            <DateInput label='Date of Birth' />

            <Selectbox
              options={['Male', 'Female', 'Custom', 'Rather not say']}
              label='Gender'
            />
          </div>
          <div className='mt-10'>
            <h2 className='text-xl font-bold'>Section Visibility</h2>
            <p className='mt-1 text-zinc-500'>
              Select which sections and content should show on your profile
              page.
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
        </Form>
      )}
    </Formik>
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
