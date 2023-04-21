import { Certificate } from '@/interfaces/sections';

import technologies from './technologies';

const certificates: Certificate[] = [
  {
    title: 'Advanced theoretical Javascript',
    issuedOn: '08/04/2022',
    href: '#',
    technology: technologies.at(2)!,
  },
  {
    title: 'Build a decentralized to-do application',
    issuedOn: '11/03/2022',
    href: '#',
    technology: technologies.at(4)!,
  },
  {
    title: 'HTML/CSS Mastery',
    issuedOn: '03/06/2022',
    href: '#',
    technology: technologies.at(0)!,
  },
  {
    title: 'React JS Mastery',
    issuedOn: '02/16/2022',
    href: '#',
    technology: technologies.at(3)!,
  },
];

export default certificates;
