import { Playground } from '@/interfaces/sections';

import friends from './friends';
import technologies from './technologies';

const playgrounds: Playground[] = [
  {
    title: 'Async/Await & Promises',
    lastModified: 18,
    friends: friends,
    technology: technologies.at(2)!,
  },
  {
    title: 'MongoDB schema',
    lastModified: 35,
    friends: friends,
    technology: technologies.at(6)!,
  },
  {
    title: 'Next Routing practice',
    lastModified: 40,
    friends: friends,
    technology: technologies.at(4)!,
  },
  {
    title: 'React Hooks practice',
    lastModified: 55,
    friends: friends,
    technology: technologies.at(3)!,
  },
];

export default playgrounds;
