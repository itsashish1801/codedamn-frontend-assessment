import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

import User from '@/interfaces/user';

import Header from '@/components/Profile/Header/Header';
import Tabs from '@/components/Profile/Header/Tabs';

export const getStaticProps: GetStaticProps<{ user: User }> = async () => {
  const res = await fetch(
    'https://codedamn-frontend-assessment.vercel.app/api/user'
  );
  const user: User = await res.json();

  return {
    props: {
      user,
    },
  };
};

function Profile({ user }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='max-w-3xl px-5 py-24 mx-auto lg:px-0'>
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
