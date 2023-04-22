import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

import User from '@/interfaces/user';

import Header from '@/components/Profile/Header/Header';
import Tabs from '@/components/Profile/Header/Tabs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
  user: User;
  timeStamp: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    'https://codedamn-frontend-assessment.vercel.app/api/user'
  );
  const user: User = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch user, received status ${res.status}`);
  }

  return {
    props: {
      user,
      timeStamp: new Date().toUTCString(),
    },
  };
};

function Profile({
  user,
  timeStamp,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const revalidate = async () => {
    setIsLoading(true);
    await fetch(`/api/revalidate?secret=thisisasecret`);
    setIsLoading(false);
    router.reload();
  };

  return (
    <div className='max-w-3xl px-5 py-24 mx-auto lg:px-0'>
      <div className='flex items-center justify-between gap-4 pb-8'>
        <span>
          You are seeing the page last updated on{' '}
          <span className='font-semibold'>{timeStamp}</span>
        </span>
        <button
          className='font-semibold text-white bg-red-600 rounded-md py-1.5 px-4  hover:bg-red-700 text-sm'
          onClick={revalidate}
        >
          {isLoading ? 'Revalidating...' : 'Revalidate'}
        </button>
      </div>
      <Header user={user} />
      <Tabs user={user} />
    </div>
  );
}

export default Profile;

// const fetcher: Fetcher<User> = (url: string) =>
//     fetch(url).then((res) => res.json());

//   preload('/api/user', fetcher);

//   const {
//     data: user,
//     error,
//     isLoading,
//   } = useSWR<User, Error>('/api/user', fetcher);

//   if (error) return <Error message={error.message} />;
//   if (isLoading) return <LoadingButton className='left-[42%]' />;
//   if (!user)
//     return <Error message='There is no such user matching your query.' />;
