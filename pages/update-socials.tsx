import { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

import Layout from '@/layouts/Layout';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar';
import { TextInput } from '@/components/Standalone/Inputs';
import { Button } from '@/components/Standalone/Buttons';

const notify = () => toast.success('Profile updated successfully!');

interface SocialsForm {
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  dribbble: string;
  behance: string;
}

const defaultCheck = Yup.string()
  .url('Invalid URL')
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('This is a required field');

const SocialsFormSchema = Yup.object().shape({
  github: defaultCheck,
  linkedin: defaultCheck,
  facebook: defaultCheck,
  instagram: defaultCheck,
  dribbble: defaultCheck,
  behance: defaultCheck,
});

function UpdateSocials() {
  const initialValues: SocialsForm = {
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SocialsFormSchema}
      onSubmit={(values) => {
        notify();
      }}
    >
      {({ errors, touched }) => (
        <Form className='w-full px-16'>
          <div className='flex flex-col gap-4'>
            <TextInput
              label='Github'
              placeholder='Github profile URL'
              error={errors.github && touched.github ? errors.github : ''}
            />
            <TextInput
              label='Linkedin'
              placeholder='Linkedin profile URL'
              error={errors.linkedin && touched.linkedin ? errors.linkedin : ''}
            />
            <TextInput
              label='Facebook'
              placeholder='Facebook profile URL'
              error={errors.facebook && touched.facebook ? errors.facebook : ''}
            />
            <TextInput
              label='Instagram'
              placeholder='Instagram profile URL'
              error={
                errors.instagram && touched.instagram ? errors.instagram : ''
              }
            />
            <TextInput
              label='Dribbble'
              placeholder='Dribbble profile URL'
              error={errors.dribbble && touched.dribbble ? errors.dribbble : ''}
            />
            <TextInput
              label='Behance'
              placeholder='Behance profile URL'
              error={errors.behance && touched.behance ? errors.behance : ''}
            />
          </div>

          <div className='flex justify-end gap-3 mt-10'>
            <Button variant='secondary'>Cancel</Button>
            <Button type='submit'>Save changes</Button>
          </div>
          <Toaster />
        </Form>
      )}
    </Formik>
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
