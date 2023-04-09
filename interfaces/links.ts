import { Icon } from './helpers';

export interface SidebarLink extends Icon {
  linkText: string;
  href: string;
  currentPath: string;
}

export interface TextLink {
  linkText: string;
  href: string;
  variant?: 'primary' | 'secondary';
}
