import Link from 'next/link';

export default function Home() {
  const baseStyle =
    'p-5 font-medium rounded-lg bg-zinc-50 ring-1 ring-zinc-100 hover:bg-zinc-100 hover:ring-zinc-200 active:ring-zinc-500 active:ring-2 focus:outline-none focus:ring-1 focus:ring-zinc-400';

  return (
    <>
      <main className='mt-40 text-center'>
        <h1 className='text-3xl font-bold'>
          Codedamn Frontend Developer Assignment
        </h1>
        <div className='grid grid-cols-2 gap-6 mt-12'>
          <Link href='/profile' className={baseStyle}>
            Profile page
          </Link>
          <Link href='/update-profile' className={baseStyle}>
            Profile update page
          </Link>
          <a
            href='https://github.com/itsashish1801/codedamn-frontend-assessment'
            className={baseStyle}
          >
            Github repo
          </a>
          <a href='#' className={baseStyle}>
            Contact
          </a>
        </div>
      </main>
    </>
  );
}
