import Header from '@/components/Profile/Header/Header';
import Tabs from '@/components/Profile/Header/Tabs';
import User from '@/interfaces/user';

import useSWR, { Fetcher } from 'swr';

function Profile() {
  const fetcher: Fetcher<User> = (url: string) =>
    fetch(url).then((res) => res.json());

  const {
    data: user,
    error,
    isLoading,
  } = useSWR<User, Error>('/api/user', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!user) return;

  return (
    <div className='max-w-3xl px-4 py-16 mx-auto'>
      <Header user={user} />
      <Tabs user={user} />
    </div>
  );
}

export default Profile;
