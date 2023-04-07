import useSWR from 'swr';

export default function Home() {
  const { data, error } = useSWR('/api/user', (url: string) =>
    fetch(url).then((res) => res.json())
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <h1>Hi</h1>
      <p>{data.fullName}</p>
    </main>
  );
}
