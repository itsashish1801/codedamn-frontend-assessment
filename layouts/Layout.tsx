import { ReactElement } from 'react';
import Head from 'next/head';

import Container from '@/components/Standalone/Container';

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>Codedamn Frontend assessment</title>
        <meta
          name='description'
          content='Codedamn Frontend assessment by Ashish Sharma'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/codedamn.svg' />
      </Head>
      <Container className='max-w-5xl'>{children}</Container>
    </>
  );
}

export default Layout;
