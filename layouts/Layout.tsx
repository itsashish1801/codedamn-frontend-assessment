import { ReactElement, useState } from 'react';
import Head from 'next/head';
import useSWR, { Fetcher } from 'swr';

import { Navbar } from '@/interfaces/sections';

import Container from '@/components/Standalone/Container';
import NavbarComponent from '@/components/Navbar/Navbar';

function Layout({ children }: { children: ReactElement }) {
  const navbarData: Navbar = {
    currentstreak: 0,
    level: 0,
    notificationCount: 0,
    imageAlt: 'Dummy Image of a Person',
    image:
      'https://res.cloudinary.com/dpoftt83y/image/upload/v1680852539/codedamn-frontend-assessment/shubham_nb7jfa.webp',
  };

  const fetcher: Fetcher<Navbar> = (url: string) =>
    fetch(url).then((res) => res.json());

  const {
    data: navbarDetail,
    error,
    isLoading,
  } = useSWR<Navbar, Error>('/api/navbar', fetcher, {
    fallbackData: navbarData,
  });

  if (!navbarDetail)
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
