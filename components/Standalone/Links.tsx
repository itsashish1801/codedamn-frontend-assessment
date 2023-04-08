import { SidebarLink, TextLink } from '@/interfaces/links';
import { SocialLink } from '@/interfaces/sections';
import Image from 'next/image';
import Link from 'next/link';

export function SidebarLink({
  linkText,
  Icon,
  href,
  currentPath,
}: SidebarLink) {
  const activeStyle =
    'before:absolute before:w-2.5 before:h-9 before:rounded-lg before:bg-zinc-900 before:-left-7 text-zinc-900';

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center py-3 font-semibold w-52 text-zinc-500 hover:text-zinc-900 ${
        currentPath === href ? activeStyle : ''
      }`}
    >
      <Icon className='w-5 h-5 mr-2' />
      {linkText}
    </Link>
  );
}

export function SocialLink({ name, href, image }: SocialLink) {
  return (
    <a
      href={href}
      className='inline-flex items-center justify-center p-2 rounded-lg ring-1 ring-zinc-200 hover:ring-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400'
    >
      <Image src={image} alt={name} width={20} height={20} />
    </a>
  );
}

export function TextLink({ href, linkText }: TextLink) {
  return (
    <Link
      href={href}
      className='font-semibold text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1'
    >
      {linkText}
    </Link>
  );
}
