import { ReactElement, useState } from 'react';
import Head from 'next/head';
import useSWR, { Fetcher } from 'swr';

import { Navbar } from '@/interfaces/sections';

import Container from '@/components/Standalone/Container';
import NavbarComponent from '@/components/Navbar/Navbar';

function Layout({ children }: { children: ReactElement }) {
  const fetcher: Fetcher<Navbar> = (url: string) =>
    fetch(url).then((res) => res.json());

  const {
    data: navbarDetail,
    error,
    isLoading,
  } = useSWR<Navbar, Error>('/api/navbar', fetcher);

  if (!navbarDetail) return;

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
      <Container className='max-w-5xl'>
        <NavbarComponent
          level={navbarDetail.level}
          notificationCount={navbarDetail.notificationCount}
          currentstreak={navbarDetail.currentstreak}
          image={navbarDetail.image}
          imageAlt={navbarDetail.imageAlt}
        />
        {children}
      </Container>
    </>
  );
}

export default Layout;
