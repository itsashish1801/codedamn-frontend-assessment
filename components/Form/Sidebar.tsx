import { useRouter } from 'next/router';

import {
  UserIcon,
  RectangleGroupIcon,
  DocumentTextIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';
import { SidebarLink } from '../Standalone/Links';

function Sidebar() {
  const paths = [
    { linkText: 'Profile', href: '/update-profile', icon: UserIcon },
    { linkText: 'Socials', href: '/update-socials', icon: RectangleGroupIcon },
    {
      linkText: 'Portfolio',
      href: '/update-portfolio',
      icon: DocumentTextIcon,
    },
    { linkText: 'Resume', href: '/update-resume', icon: PaperClipIcon },
  ];

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <div>
      <ul className='flex-col flex-shrink-0 hidden gap-3 p-6 overflow-hidden md:inline-flex rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-100'>
        {paths.map((path) => (
          <li key={path.linkText}>
            <SidebarLink
              linkText={path.linkText}
              Icon={path.icon}
              href={path.href}
              currentPath={currentPath}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
